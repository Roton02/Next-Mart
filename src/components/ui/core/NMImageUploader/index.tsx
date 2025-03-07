import React from 'react'
import { Input } from '../../input'

function NMImageUploader() {
  return (
    <div>
      <Input type='file' accept='image/*' multiple></Input>
    </div>
  )
}

export default NMImageUploader
