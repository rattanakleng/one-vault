import React from 'react'

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  )
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" {...props} />
    </div>
  )
}

export function FormBtn(props) {
  return (
    <input type="submit"
      {...props}
      style={{ float: 'right', marginBottom: 10 }}
      className="btn bg-prussian-blue text-white mx-2"/>
  )
}

export function FormBtnOutline(props) {
    return (
      <button
        {...props}
        style={{ float: 'right', marginBottom: 10 }}
        className="btn bg-beau-blue mx-2"
      >
        {props.children}
      </button>
    )
  }
