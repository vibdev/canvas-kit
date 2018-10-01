# Canvas Kit Cookie Banner

Cookie banner component.

## Usage

### CookieBanner

Fixes a cookie banner to the bottom of the web page. Can be configured with a "Cookie Settings"
element and a custom notice.

A static constant is available with the default notice text: `CookieBanner.DefaultNotice`

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
  onClickSettings={() => {}},
  notice={`${CookieBanner.DefaultNotice} This is appended.`}
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
We use cookies to ensure that we give you the best experience on our website. If you continue without changing your settings, we’ll assume that you are willing to receive cookies.
```

Customize notice with string or element.
