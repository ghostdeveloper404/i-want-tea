import React from 'react'

const about = () => {
    return (
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4">About Us</h1>
            <p className="text-lg text-gray-400">
                Welcome to the Get Me Chai about page. We are dedicated to bringing you the best chai experience.
            </p>
            <p className="text-lg text-gray-400 mt-4">
                Our mission is to provide high-quality chai that not only tastes great but also brings people together.
            </p>
            <p className="text-lg text-gray-400 mt-4">
                We source our ingredients from the best suppliers and ensure that every cup of chai is made with love and care.
            </p>
        </div>
    )
}

export  default about
export const metdata = {
    title: "About Us",
    description: "Learn more about Get Me Chai and our mission to bring you the best chai experience."
}
