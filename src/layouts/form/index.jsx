import { Outlet } from "react-router";

export const FormLayout = () => {
    return (
        <div className="container min-h-screen h-full max-w-[1440px] w-full mx-auto py-2 sm:py-5 px-3 sm:px-5 lg:px-[100px]">
            <Outlet />
        </div>
    );
};