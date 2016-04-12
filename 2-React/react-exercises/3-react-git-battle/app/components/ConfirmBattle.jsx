import React from 'react'

export const ConfirmBattle = (props) => {
  return props.isLoading === true
    ? <p>LOADING</p>
    : <p>CONFIRM BATTLE</p>
}
