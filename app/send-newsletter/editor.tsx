import { useState, useEffect, useCallback, useRef, ChangeEvent } from 'react';

// Type definitions
interface FormData {
  subject: string;
  headerText: string;
  bodyText: string;
  subText: string;
}

interface Message {
  type: 'success' | 'error' | '';
  content: string;
}

interface CharacterLimits {
  subject: number;
  headerText: number;
  bodyText: number;
  subText: number;
}

type FormField = keyof FormData;
type FormatCommand = 'bold' | 'italic' | 'underline';

interface NewsletterEditorProps {
  backendUrl: string | undefined;
  onStatsUpdate: (subscriberCount?: number) => void;
  onShowMessage: (type: 'success' | 'error', content: string) => void;
  message: Message;
}

const NewsletterEditor: React.FC<NewsletterEditorProps> = ({ 
  backendUrl, 
  onStatsUpdate, 
  onShowMessage,
  message 
}) => {
  const [formData, setFormData] = useState<FormData>({
    subject: '',
    headerText: '',
    bodyText: '',
    subText: ''
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const bodyTextRef = useRef<HTMLTextAreaElement>(null);
  const previewRef = useRef<HTMLIFrameElement>(null);

  // Character limits
  const limits: CharacterLimits = {
    subject: 100,
    headerText: 60,
    bodyText: 1000,
    subText: 500
  };

  // Handle input changes
  const handleInputChange = (field: FormField, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Generate character count info
  const getCharacterInfo = (field: FormField) => {
    const length = formData[field]?.length || 0;
    const limit = limits[field];
    const percentage = length / limit;
    
    let colorClass = 'text-gray-500';
    if (percentage > 0.9) colorClass = 'text-red-600';
    else if (percentage > 0.7) colorClass = 'text-yellow-600';

    return { length, limit, colorClass };
  };

  // Text formatting functions
  const formatText = (command: FormatCommand) => {
    const textarea = bodyTextRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    
    if (selectedText) {
      let formattedText = selectedText;
      switch(command) {
        case 'bold':
          formattedText = `<strong>${selectedText}</strong>`;
          break;
        case 'italic':
          formattedText = `<em>${selectedText}</em>`;
          break;
        case 'underline':
          formattedText = `<u>${selectedText}</u>`;
          break;
      }
      
      const newValue = textarea.value.substring(0, start) + formattedText + textarea.value.substring(end);
      handleInputChange('bodyText', newValue);
      
      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(start, start + formattedText.length);
      }, 0);
    }
  };

  // Generate newsletter HTML template
  const generateNewsletterHTML = useCallback((headerText: string, bodyText: string, subText: string) => {
    const processedBodyText = bodyText.replace(/\n/g, '<br>');
    const processedSubText = subText.replace(/\n/g, '<br>');

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Newsletter Preview</title>
    <style>
        @font-face {
            font-family: 'Cocon';
            src: url('https://res.cloudinary.com/dwjnkuvqv/raw/upload/v1748245946/CoconRegularFont_jevejx.otf') format('opentype');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
        }

        @font-face {
            font-family: 'Manrope';
            src: url('https://res.cloudinary.com/dwjnkuvqv/raw/upload/v1748245947/Manrope-Regular_mjyrxx.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background-color: #f5f5f5;
            line-height: 1.6;
            padding: 20px;
        }
        
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: white;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .header {
            background: linear-gradient(135deg, #2d5f4f 0%, #4a8c6f 100%);
            background-image: url('https://res.cloudinary.com/dwjnkuvqv/image/upload/v1748243700/email-bg_qkmzzs.png');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            padding: 40px 30px;
            text-align: center;
            position: relative;
            color: white;
        }
        
        .header h1 {
            font-family: 'Cocon', 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            font-size: 28px;
            font-weight: normal;
            margin: 0;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        .star-top {
            position: absolute;
            top: 20px;
            right: 30px;
            width: 40px;
            height: 40px;
            background-image: url('https://res.cloudinary.com/dwjnkuvqv/image/upload/v1748243700/star2_gx3m3s.png');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
        }
        
        .content {
            padding: 40px 30px;
            background-color: white;
            position: relative;
        }
        
        .main-content {
            color: #333;
            font-size: 16px;
            margin-bottom: 25px;
            line-height: 1.6;
        }
        
        .sub-text {
            color: #666;
            font-size: 14px;
            margin-bottom: 25px;
            line-height: 1.6;
        }
        
        .closing {
            color: #666;
            margin: 25px 0 10px 0;
            font-size: 14px;
        }
        
        .signature {
            color: #666;
            margin-bottom: 30px;
            font-size: 14px;
        }
        
        .logo {
            margin: 30px 0;
            text-align: center;
        }
        
        .logo img {
            height: 40px;
        }
        
        .social-icons {
            display: flex;
            gap: 15px;
            margin: 30px 0;
            justify-content: center;
        }
        
        .social-icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            overflow: hidden;
        }
        
        .social-icon img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .unsubscribe {
            color: #999;
            font-size: 12px;
            margin: 20px 0 10px 0;
            text-align: center;
        }
        
        .unsubscribe a {
            color: #ffa500;
            text-decoration: none;
        }
        
        .copyright {
            color: #999;
            font-size: 12px;
            margin-bottom: 20px;
            text-align: center;
        }
        
        .star-bottom {
            position: absolute;
            bottom: 30px;
            right: 30px;
            width: 30px;
            height: 30px;
            background-image: url('https://res.cloudinary.com/dwjnkuvqv/image/upload/v1748243700/star2_gx3m3s.png');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
        }
        
        .footer {
            position: relative;
            padding-bottom: 60px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="star-top"></div>
            <h1>${headerText}</h1>
        </div>
        
        <div class="content">
            <div class="main-content">${processedBodyText}</div>
            ${processedSubText ? `<div class="sub-text">${processedSubText}</div>` : ''}
            
            <p class="closing">Keep growing and stay skilled!</p>
            <p class="signature">Best regards,<br>The Young and Skilled Initiative Team</p>
            
            <div class="logo">
                <img src="https://res.cloudinary.com/dwjnkuvqv/image/upload/v1748244988/logo_bydem0.png" alt="Young & Skilled Logo">
            </div>
            
            <div class="social-icons">
                <a href="https://www.facebook.com/profile.php?id=61563309331437&mibextid=LQQJ4d&mibextid=LQQJ4d" class="social-icon">
                    <img src="https://res.cloudinary.com/dwjnkuvqv/image/upload/v1748244987/Facebook_hckslw.png" alt="Facebook">
                </a>
                <a href="https://www.linkedin.com/company/young-and-skilled-initiative/" class="social-icon">
                    <img src="https://res.cloudinary.com/dwjnkuvqv/image/upload/v1748244988/Linkedin_fbhbqj.png" alt="LinkedIn">
                </a>
                <a href="https://www.instagram.com/ysinitiative?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" class="social-icon">
                    <img src="https://res.cloudinary.com/dwjnkuvqv/image/upload/v1748244988/Instagram_jj5rv6.png" alt="Instagram">
                </a>
            </div>
            
            <div class="footer">
                <p class="unsubscribe">Don't want to receive these emails anymore? <a href="#">Unsubscribe here</a></p>
                <p class="copyright">Copyright © ${new Date().getFullYear()} Young & Skilled Initiative</p>
                <div class="star-bottom"></div>
            </div>
        </div>
    </div>
</body>
</html>
    `;
  }, []);

  // Update preview
  const updatePreview = useCallback(() => {
    const html = generateNewsletterHTML(formData.headerText, formData.bodyText, formData.subText);
    if (previewRef.current) {
      previewRef.current.srcdoc = html;
    }
  }, [formData, generateNewsletterHTML]);

  // Send newsletter
  const sendNewsletter = async () => {
    const { subject, headerText, bodyText, subText } = formData;

    if (!subject.trim() || !headerText.trim() || !bodyText.trim()) {
      onShowMessage('error', 'Please fill in all required fields (Subject, Header Text, and Body Text)');
      return;
    }

    setIsLoading(true);

    try {
      if (!backendUrl) {
        throw new Error('Backend URL not configured. Add NEXT_PUBLIC_API_BASE_URL to your .env.local file.');
      }

      const response = await fetch(`${backendUrl}/api/newsletter/send-newsletter`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject,
          headerText,
          bodyText,
          subText
        })
      });

      const data = await response.json();

      if (response.ok) {
        onShowMessage('success', `Newsletter sent successfully to ${data.subscriberCount || 'all'} subscribers!`);
        onStatsUpdate(data.subscriberCount);
      } else {
        onShowMessage('error', data.message || 'Failed to send newsletter');
      }
    } catch (error) {
      onShowMessage('error', 'Network error. Please check your connection and try again.');
      console.error('Error:', error);
    }

    setIsLoading(false);
  };

  // Update preview when form data changes
  useEffect(() => {
    const timer = setTimeout(updatePreview, 300);
    return () => clearTimeout(timer);
  }, [formData, updatePreview]);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
      {/* Editor Panel */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
        <h2 className="text-2xl font-semibold text-green-800 mb-6 flex items-center gap-2">
          ✏️ Content Editor
        </h2>

        <div className="space-y-6">
          {/* Subject Line */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Subject Line
            </label>
            <input
              type="text"
              value={formData.subject}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange('subject', e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:ring-4 focus:ring-green-100 transition-all outline-none"
              placeholder="Enter your email subject line..."
            />
            <div className={`text-xs mt-1 text-right ${getCharacterInfo('subject').colorClass}`}>
              {getCharacterInfo('subject').length}/{getCharacterInfo('subject').limit} characters
            </div>
          </div>

          {/* Header Text */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Header Text
            </label>
            <input
              type="text"
              value={formData.headerText}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange('headerText', e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:ring-4 focus:ring-green-100 transition-all outline-none"
              placeholder="Enter the main header for your newsletter..."
            />
            <div className={`text-xs mt-1 text-right ${getCharacterInfo('headerText').colorClass}`}>
              {getCharacterInfo('headerText').length}/{getCharacterInfo('headerText').limit} characters
            </div>
          </div>

          {/* Body Text */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Main Body Text
            </label>
            
            {/* Rich Text Toolbar */}
            <div className="flex gap-2 mb-2 p-2 bg-gray-50 rounded-lg border">
              <button
                type="button"
                onClick={() => formatText('bold')}
                className="px-3 py-1 bg-white border border-gray-200 rounded hover:bg-gray-100 transition-colors text-sm font-bold"
              >
                B
              </button>
              <button
                type="button"
                onClick={() => formatText('italic')}
                className="px-3 py-1 bg-white border border-gray-200 rounded hover:bg-gray-100 transition-colors text-sm italic"
              >
                I
              </button>
              <button
                type="button"
                onClick={() => formatText('underline')}
                className="px-3 py-1 bg-white border border-gray-200 rounded hover:bg-gray-100 transition-colors text-sm underline"
              >
                U
              </button>
            </div>

            <textarea
              ref={bodyTextRef}
              value={formData.bodyText}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleInputChange('bodyText', e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:ring-4 focus:ring-green-100 transition-all outline-none resize-none"
              rows={8}
              placeholder="Write your main newsletter content here...

Hello [Subscriber Name],

We hope this newsletter finds you thriving and growing in your professional journey. This week, we've curated some exciting insights and opportunities just for you.

[Add your content here...]"
            />
            <div className={`text-xs mt-1 text-right ${getCharacterInfo('bodyText').colorClass}`}>
              {getCharacterInfo('bodyText').length}/{getCharacterInfo('bodyText').limit} characters
            </div>
          </div>

          {/* Sub Text */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Text (Optional)
            </label>
            <textarea
              value={formData.subText}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleInputChange('subText', e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:ring-4 focus:ring-green-100 transition-all outline-none resize-none"
              rows={4}
              placeholder="Add any additional information, calls to action, or announcements...

Examples:
- Follow us on social media for daily tips
- Join our community for exclusive resources
- Don't miss our upcoming events"
            />
            <div className={`text-xs mt-1 text-right ${getCharacterInfo('subText').colorClass}`}>
              {getCharacterInfo('subText').length}/{getCharacterInfo('subText').limit} characters
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={updatePreview}
              className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium flex items-center justify-center gap-2"
            >
              👀 Preview Newsletter
            </button>
            <button
              type="button"
              onClick={sendNewsletter}
              disabled={isLoading}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-green-700 to-green-600 text-white rounded-lg hover:from-green-800 hover:to-green-700 transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed font-medium flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                  Sending...
                </>
              ) : (
                <>
                  📧 Send to All Subscribers
                </>
              )}
            </button>
          </div>

          {/* Messages */}
          {message.content && (
            <div className={`p-4 rounded-lg ${
              message.type === 'success' 
                ? 'bg-green-100 text-green-800 border border-green-200' 
                : 'bg-red-100 text-red-800 border border-red-200'
            }`}>
              {message.content}
            </div>
          )}
        </div>
      </div>

      {/* Preview Panel */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 sticky top-8">
        <h2 className="text-2xl font-semibold text-green-800 mb-6 flex items-center gap-2">
          👁️ Live Preview
        </h2>
        
        <div className="border-2 border-gray-200 rounded-xl overflow-hidden bg-gray-50">
          <iframe
            ref={previewRef}
            className="w-full h-[600px] border-none"
            srcDoc="<div style='padding: 2rem; text-align: center; color: #64748b; font-family: system-ui;'>📝 Start typing to see your newsletter preview...</div>"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsletterEditor;