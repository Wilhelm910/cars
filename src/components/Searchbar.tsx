"use client"

import React, { useState } from 'react'
import { SearchManufacturer } from '.'

const Searchbar = () => {

    const [manufacturer, setManufacturer] = useState('')

    const handleSearch = () => {

    }

    return (
        <form onSubmit={handleSearch}>
            <SearchManufacturer
                manufacturer={manufacturer}
                setManufacturer={setManufacturer} />
        </form>
    )
}

export default Searchbar