import React from 'react';

const SectionHeader = () => {
    return (
        <div className="w-full flex-col justify-start items-start inline-flex gap-3">
            <div className="flex justify-start items-center gap-4">
                <div className="w-24 h-1 bg-secondary" />
                <div className="text-secondary text-md font-normal font-secondary">About us</div>
            </div>
            <div className="self-stretch text-lime-950 text-3xl sm:text-4xl font-medium">About AY Associates Nature Homes</div>
        </div>
    );
};

export default SectionHeader;