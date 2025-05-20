import { useState } from 'react';

export default function Starter() {
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');

    const handleStart = () => {
        if (!phone) {
            alert("شماره موبایل ضروری است");
            return;
        }
        // فعلاً فقط تست
        console.log('User Info:', { phone, name });
        // اینجا می‌تونه بعداً navigate بشه به Home
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-secondary px-4">
            <div className="w-full max-w-sm bg-bgWhite p-6 rounded-2xl shadow-lg">
                <h1 className="text-xl font-bold text-primary mb-8 text-center">شروع سفارش</h1>

                <input
                    type="tel"
                    placeholder="شماره موبایل"
                    className="w-full text-center placeholder:text-sm mb-2 p-2 border rounded-full focus:outline-2 transition-all duration-300 focus:border-accent focus:ring-1 focus:ring-accent"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <div className='flex justify-center mb-12'>
                    <a href="#" className='text-primary' > به عنوان مهمان وارد شوید </a>
                </div>
                <button
                    onClick={handleStart}
                    className="w-full bg-primary text-white py-2 rounded-full hover:bg-accent transition"
                >
                    شروع
                </button>
            </div>
        </div>
    );
}
