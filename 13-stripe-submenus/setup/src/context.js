import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(true);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    }
    
    const openModal = () => {
        setIsModalOpen(true);
    }

    return <AppContext.Provider>
        {children}
    </AppContext.Provider>
}