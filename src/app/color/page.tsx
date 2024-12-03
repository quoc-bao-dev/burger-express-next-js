import React from 'react';

const Page = () => {
    return (
        <>
            <div className="w-full bg-background">
                <div className="p-4">
                    <p className="text-foreground">background</p>
                </div>
            </div>
            <div className="w-full bg-primary">
                <div className="p-4">
                    <p className="text-primary-foreground">primary</p>
                </div>
            </div>
            <div className="w-full bg-secondary">
                <div className="p-4">
                    <p className="text-secondary-foreground">secondary</p>
                </div>
            </div>
            <div className="w-full bg-card">
                <div className="p-4">
                    <p className="text-card-foreground">card</p>
                </div>
            </div>
            <div className="w-full bg-popover">
                <div className="p-4">
                    <p className="text-popover-foreground">popover</p>
                </div>
            </div>
            <div className="w-full bg-muted">
                <div className="p-4">
                    <p className="text-muted-foreground">muted</p>
                </div>
            </div>
            <div className="w-full bg-accent">
                <div className="p-4">
                    <p className="text-accent-foreground">accent</p>
                </div>
            </div>
            <div className="w-full bg-destructive">
                <div className="p-4">
                    <p className="text-destructive-foreground">destructive</p>
                </div>
            </div>
        </>
    );
};

export default Page;
