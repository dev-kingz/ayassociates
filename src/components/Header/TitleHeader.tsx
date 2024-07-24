import React from 'react'

const TitleHeader = ({ titleText, subTitleText, titleColor, subTitleColor }: { titleColor: string, subTitleColor: string, titleText: string, subTitleText: string }) => {
    return (
        <div className="Headerflex justify-center items-center ">
            <div className={`Title py-2 text-4xl font-semibod sm:text-6xl font-primary ${titleColor} flex justify-center`}>
                {titleText}
            </div>
            <div className={`SubTitle py-2 text-lg ${subTitleColor}]text-center`}>
                {subTitleText}
            </div>
        </div>
    )
}

export default TitleHeader