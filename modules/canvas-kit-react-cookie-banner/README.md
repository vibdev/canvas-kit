# Canvas Kit Cookie Banner

Cookie banner component.

## Usage

### CookieBanner

Fixes a cookie banner to the bottom of the web page. Can be configured with a "Cookie Settings"
element and a custom notice.

```jsx
import CookieBanner from '@workday/canvas-kit-react-cookie-banner'

<CookieBanner
  onAccept={this.onAccept}
  isClosed={this.state.acceptedCookies}
/>

<CookieBanner
  onAccept={this.onAccept}
  isClosed={this.state.acceptedCookies}
  onClickSettings={() => {}},
  notice="Custom notice"
/>


<CookieBanner
  onAccept={this.onAccept}
  isClosed={this.state.acceptedCookies}
  notice={<Component />}
/>
```

#### Properties

**Required**

**`onAccept`**  
Type: `(e: React.MouseEvent<HTMLButtonElement>) => void`  
Callback upon accepting cookies

**Optional**

**`isClosed`**  
Type: `boolean`  
Default: `false`  
If the banner is currently closed

**`onClickSettings`**  
Type: `(e: React.MouseEvent<HTMLButtonElement>) => void`  
Default: `undefined`  
Adds "Cookie Settings" element and attaches callback.

**`notice`**  
Type: `string | React.ReactNode`  
Default:

```
We use cookies to understand what visitors find useful on the site. Any data we collect is anonymous and only used to enhance the user experience. If you are ok with us using cookies for this purpose, please accept this notice.
```

Customize notice with string or element.
