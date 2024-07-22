import React from 'react';

const Breadcrumb = ({ crumbs }) => {
    return (
        <nav>
            <ol className="flex space-x-1 font-inter">
                {crumbs.map((crumb, index) => (
                    <li key={index} >
                        {index === crumbs.length - 1 ? (
                            <span className="font-bold text-verde-100">{crumb.label}</span>
                        ) : (
                            <a href={crumb.path} className="text-verde-100 hover:underline">
                               {crumb.label} /
                            </a>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
