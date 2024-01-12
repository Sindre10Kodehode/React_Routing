

export const PageLayOut = ({children}) =>{

    return (
        <main className="flex flex-col items-center min-h-screen py-20 bg-slate-200">{children}</main>
        )
}

export const Pstyle = ({children}) =>{

    return (
        <p className="max-w-md p-4 text-lg">{children}</p>
    )
}

