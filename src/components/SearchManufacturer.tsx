import React from 'react'
import { SearchManufacturerProps } from '../../types'
import { manufacturers } from '../../constants';
import { Autocomplete, TextField } from '@mui/material';

const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {


    const handleChange = (e: React.SyntheticEvent, value: string) => {
        setManufacturer(value)
    }

    console.log(manufacturer)

    return (
        <>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={manufacturers}
                onChange={handleChange}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Manufacturers" />}
            />
        </>
    )
}

export default SearchManufacturer