import React from "react";

interface ITextField extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    rows?: number
}

function TextField({rows = 1, ...props} : ITextField) {
    return(
        rows > 1 ?
        <textarea rows={rows}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300
                      focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600
                      dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  {...props}/> :
        <input type="text"
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                       focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                       dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               {...props}/>
)
}

export default TextField;
