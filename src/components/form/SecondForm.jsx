import { PaginationComponent } from "../pagination";

export const SecondForm = () => {
    return (
        <div className="">
            <div className="flex justify-between items-center">
                <h1 className="font-normal sm:font-bold md:font-semibold text-[30px] sm:text-[38px] md:text-[48px] max-w-[564px] text-[1D1D1D]">Производственные параметры фильма</h1>

                <button className="hidden sm:block rounded-[41px] min-w-[225px] border border-[#1213131f] text-[#121212] py-[14.5px] px-[19.5px]">Отменить заполнение</button>
            </div>

            <h1 className="text-center mt-[100px]">Second form</h1>

            <div className="grid place-content-center mt-8">
                <PaginationComponent currentPage={2} />
            </div>
        </div>
    );
};