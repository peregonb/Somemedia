import React from 'react';

export const Pagination = () => {
    return (
        <section className="pagination">
            <div className="pagination-wrap wrap">
                <div className="pagination-back icon-chevronBold disabled"/>
                <div className="pagination-numbers">
                    <div className="pagination-num active">1</div>
                    <div className="pagination-num">2</div>
                    <div className="pagination-num">3</div>
                </div>
                <div className="pagination-next icon-chevronBold"/>
            </div>
        </section>
    );
}

