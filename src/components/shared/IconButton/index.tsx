import React, { ComponentType } from 'react'
import { BaseProps } from '../../../types'
import BaseButton from '../BaseButton/BaseButton'
import { SvgProps } from '../../../assets/icons/smart/types'

type IconButtonProps = BaseProps<HTMLButtonElement> & {
  Icon: ComponentType<SvgProps>
}

const IconButton = ({ Icon, onClick, className }: IconButtonProps) => (
  <BaseButton onClick={onClick}>
    <Icon className={className} />
  </BaseButton>
)
export default IconButton
