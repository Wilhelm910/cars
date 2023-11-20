"use client"

import { Button } from '@mui/material'
import React from 'react'
import { CustomButtonProps } from '../../types'

const CustomButton = ({ title, buttonStyles, handleClick, btnType, btnColor }: CustomButtonProps) => {
    return (
        <>
            <Button variant={buttonStyles} disabled={false} type={btnType} color={btnColor} onClick={handleClick}>
                {title}
            </Button>
        </>
    )
}

export default CustomButton