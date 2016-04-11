## React Functional Stateless Components

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
