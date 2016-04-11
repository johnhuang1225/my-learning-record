## React Functional Stateless Components

Because this is such a common pattern in React, as of React 0.14 you can now have components that are just normal functions if those components only have a render method and optional props.

```js
const ProfilePic (props) => {
   return <img src={'https://photo.fb.com/' + props.username} />
 }
 const ProfileLink (props) => {
   return (
     <a href={'https://www.fb.com/' + props.username}>
       {props.username}
     </a>
   )
 }
 const Avatar (props) => {
   return (
     <div>
       <ProfilePic username={props.username} />
       <ProfileLink username={props.username} />
     </div>
   )
 }

 <Avatar username="tylermcginnis" />
```
