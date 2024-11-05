import { useForm, Controller } from "react-hook-form";
import { MySelect } from "../form-select";
import { MyInput } from "../form-input";
import { MyArea } from "../form-area";
import { useEffect, useState } from "react";
import { genreOptions, formatOptions, countryOptions, numberOptions } from "../../mocks";
import { PaginationComponent } from "../pagination";
import PaginationBlackIcon from '../../../public/icons/pagination-black-icon.svg'
import PaginationWhiteIcon from '../../../public/icons/pagination-white-icon.svg'
import { useNavigate } from "react-router-dom";


export const FirstForm = () => {
    const { handleSubmit, control, formState: { errors }, setValue, reset, watch } = useForm();
    const [isFilled, setIsFilled] = useState(false);
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log('Form submit:', data);
        localStorage.setItem('formData', JSON.stringify(data));

        navigate('/second');
    };

    const handleClearForm = () => {
        reset();
        localStorage.removeItem('formData');
        setIsFilled(false);
    };

    const watchedFields = watch(["name", "genre", "format", "numbers", "country"]);

    useEffect(() => {
        const allFilled = watchedFields.every(field => field !== undefined && field !== "");
        setIsFilled(allFilled);
    }, [watchedFields]);

    useEffect(() => {
        const savedData = localStorage.getItem('formData');

        if (savedData) {
            const parsedData = JSON.parse(savedData);

            for (const [key, value] of Object.entries(parsedData)) {
                setValue(key, value);
            }
        }
    }, [setValue]);

    return (
        <div className="xl:px-[50px]">
            {/* INTRO */}
            <div className="flex justify-between items-center">
                <h1 className="font-normal sm:font-bold md:font-semibold text-[30px] sm:text-[38px] md:text-[48px] max-w-[564px] text-[1D1D1D]">Производственные параметры фильма</h1>

                <button onClick={handleClearForm} className={`${isFilled ? 'bg-blue-600 text-white hover:scale-95' : ''} duration-300 hidden sm:block rounded-[41px] min-w-[225px] border border-[#1213131f] text-[#121212] py-[14.5px] px-[19.5px]`}>Отменить заполнение</button>
            </div>


            {/* FORM */}
            <form className="sm:flex justify-between gap-[27px] pt-5 sm:pt-[72px]">
                {/* LEFT */}
                <div className="max-w-[600px] w-full">
                    {/* POJECT NAME */}
                    <div>

                        <label htmlFor="name" className="text-[15px] text-[#1D1D1D]">Название проекта</label>

                        <Controller
                            name="name"
                            control={control}
                            rules={{ required: 'Заполните поле' }}
                            render={({ field }) => (
                                <>
                                    <div className={`flex justify-between items-center gap-2 max-w-[498px] w-full border ${errors.name ? 'border-[#BE1F2A]' : 'border-[#00000033]'} p-[18px] mt-3 rounded-[6px]`}>
                                        <MyInput type="text" id='name' {...field} placeholder="Название" />

                                        {errors.name && <p className="text-[#BE1F2A] text-center min-w-[150px]">{errors.name.message}</p>}
                                    </div>
                                </>
                            )}
                        />

                    </div>

                    {/* GENRE */}
                    <div className="mt-5 sm:mt-[27px]">

                        <label htmlFor="genre" className="text-[15px] text-[#1D1D1D]">Жанр</label>

                        <Controller
                            name="genre"
                            control={control}
                            rules={{ required: 'Выберите жанр' }}
                            isInvalid={!!errors.genre}
                            render={({ field }) => (
                                <>
                                    <MySelect
                                        {...field}
                                        options={genreOptions}
                                        placeholder="Жанр"
                                    />
                                    {errors.genre && (
                                        <p className="text-[#BE1F2A] min-w-[150px]">{errors.genre.message}</p>
                                    )}
                                </>
                            )}
                        />

                    </div>

                    {/* FORMAT */}
                    <div className="mt-5 sm:mt-[25px]">

                        <label htmlFor="format" className="text-[15px] text-[#1D1D1D]">Формат (для онлайн-платформ, большого экрана, интернета, другое)</label>

                        <Controller
                            name="format"
                            control={control}
                            rules={{ required: 'Выберите формат' }}
                            render={({ field }) => (
                                <>
                                    <MySelect
                                        {...field}
                                        options={formatOptions}
                                        placeholder="Формат"
                                        isInvalid={!!errors.format}
                                    />
                                    {errors.format && (
                                        <p className="text-[#BE1F2A] min-w-[150px]">{errors.format.message}</p>
                                    )}
                                </>
                            )}
                        />

                    </div>

                    {/* № УНФ или отсутствует */}
                    <div className="mt-5 sm:mt-[49px]">

                        <label htmlFor="unf" className="text-[15px] text-[#1D1D1D]">№ УНФ или отсутствует</label>

                        <Controller
                            name="numbers"
                            control={control}
                            rules={{ required: 'Выберите № УНФ' }}
                            render={({ field }) => (
                                <>
                                    <MySelect
                                        {...field}
                                        options={numberOptions}
                                        placeholder="890-000-000-00-000"
                                        isInvalid={!!errors.numbers}
                                    />
                                    {errors.numbers && (
                                        <p className="text-[#BE1F2A] min-w-[150px]">{errors.numbers.message}</p>
                                    )}
                                </>
                            )}
                        />

                    </div>

                </div>

                {/* RIGHT */}
                <div className="flex flex-col md:pl-[62px] max-w-[600px] w-full">
                    {/* COUNTRY */}
                    <div>

                        <label htmlFor="region" className="text-[15px] text-[#1D1D1D]">Страна-производитель (копродукция)</label>

                        <Controller
                            name="country"
                            control={control}
                            rules={{ required: 'Выберите cтрана' }}
                            render={({ field }) => (
                                <>
                                    <MySelect
                                        {...field}
                                        options={countryOptions}
                                        placeholder="Страна"
                                        isInvalid={!!errors.country}
                                    />
                                    {errors.country && (
                                        <p className="text-[#BE1F2A] min-w-[150px]">{errors.country.message}</p>
                                    )}
                                </>
                            )}
                        />

                    </div>

                    {/* PRICE */}
                    <div className="mt-5 sm:mt-[31px]">

                        <label htmlFor="price" className="text-[15px] text-[#1D1D1D] bg-yellow-400">
                            <p className="max-w-[500px]">Сведения о сметной стоимости производства фильма
                                на территории Нижегородской области, если есть</p>
                        </label>

                        <Controller
                            name="price"
                            control={control}
                            render={({ field }) => (
                                <>
                                    <div className='max-w-[498px] w-full border border-[#00000033] p-[18px] mt-3 rounded-[6px]'>
                                        <MyInput type="number" id='price' {...field} placeholder="Сметная стоимость" onChange={(e) => {
                                            const value = e.target.value;

                                            if (value < 0) {
                                                e.target.value = 1;
                                            }

                                            field.onChange(value);
                                        }} />
                                    </div>
                                </>
                            )}
                        />

                    </div>

                    {/* SINOPSIS */}
                    <div className="mt-5 sm:mt-[31px]">

                        <label htmlFor="sinopsis" className="text-[15px] text-[#1D1D1D]">Синопсис</label>

                        <Controller
                            name="sinopsis"
                            control={control}
                            render={({ field }) => (
                                <>
                                    <div className='max-w-[498px] w-full border border-[#00000033] p-[18px] mt-3 rounded-[6px]'>
                                        <MyArea id='sinopsis' {...field} onChange={(e) => { field.onChange(e.target.value) }}
                                            placeholder="Напишите краткое изложение"></MyArea>
                                    </div>
                                </>
                            )}
                        />

                    </div>
                </div>
            </form>


            {/* FOOTER  */}
            <div className="grid place-content-center mt-8">
                <PaginationComponent currentPage={1} />
            </div>

            <div className="flex justify-evenly sm:justify-end items-center mt-6 sm:mt-[54px] md:mt-[74px]">
                <button onClick={handleClearForm} className={`${isFilled ? 'bg-blue-600 text-white hover:scale-95 ' : ''} duration-300 sm:hidden rounded-[41px] max-w-[185px] border border-[#1213131f] text-[#121212] h-[50px] px-[10px] text-[15px]`}>Отменить заполнение</button>

                <button onClick={handleSubmit(onSubmit)} className={`${isFilled ? 'bg-blue-600 text-white hover:scale-95' : ''} duration-300 flex justify-end items-center bg-[#EFEFEF] h-[50px] px-[10px] sm:py-[14.5px] sm:px-[22px] rounded-[41px] text-[15px] text-[#ACACAC]`}> <span className="sm:pl-[38px]">Следующий шаг</span> <img src={isFilled ? PaginationWhiteIcon : PaginationBlackIcon} alt="icon" /></button>
            </div>
        </div>
    );
};