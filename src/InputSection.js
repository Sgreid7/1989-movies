import React, { Component } from 'react'
import styled from 'styled-components'

export const InputSection = ({ type, onChange, name, value, placeholder }) => {
  return (
    <Section>
      <label htmlFor={name}>{name}</label>
      <input
        type={type}
        onChange={onChange}
        name={name}
        value={value}
        placeholder={placeholder}
      />
    </Section>
  )
}

export default InputSection

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`
