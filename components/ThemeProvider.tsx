/*
 * @Description: 
 * @Author: jianguo
 * @Date: 2023-02-08 20:40:46
 * @LastEditors: jianguo
 * @LastEditTime: 2023-02-12 19:41:16
 */
import React, { createContext, ReactNode, useContext, useState } from 'react'

type dataType = {
    children: ReactNode
}
const Context = createContext()

export  function ThemeProvider({ children }: dataType) {
    const [theme, setTheme] = useState("light")
    return (
        <Context.Provider value={[theme,setTheme]}>
            <div className={theme} color-mode={theme}>
            {children}
            </div>
        </Context.Provider>
    )
}
export function useThemeContext() {
    return useContext(Context);
}
