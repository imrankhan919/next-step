import React from 'react'

const LoadingScreen = ({ loadingMessage = "Loading..." }) => {
    return (
        <div class="loading-body min-h-screen flex items-center justify-center p-6">

            <div class="relative w-full max-w-md bg-white rounded-[28px] border-[3px] border-slate-900 cb-shadow px-8 py-10 sm:px-10 sm:py-12 overflow-hidden">


                <div class="absolute -top-1 -right-14 rotate-45 bg-amber-700 text-white text-[10px] font-bold tracking-wider px-14 py-1.5 shadow-md">
                    STUDENT PORTAL
                </div>


                <div class="flex justify-center mb-6">
                    <span class="bg-amber-400 border-2 border-slate-900 text-slate-900 font-bold text-sm tracking-wide px-4 py-1.5 rounded-full">
                        JUST A MOMENT
                    </span>
                </div>


                <div class="flex justify-center mb-6">
                    <div class="relative w-20 h-20 flex items-center justify-center">
                        <div class="spinner absolute inset-0 rounded-full border-[6px] border-slate-200 border-t-amber-500 border-r-amber-500"></div>
                        <div class="w-9 h-9 rounded-md bg-amber-400 border-2 border-slate-900 flex items-center justify-center font-extrabold text-slate-900 text-sm">
                            CB
                        </div>
                    </div>
                </div>


                <h1 class="text-center text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                    {loadingMessage} <span class="text-amber-600">...</span>
                </h1>
                <p class="text-center text-slate-500 text-sm sm:text-base mb-8 flex items-center justify-center gap-1">
                    Setting up your personalized dashboard
                    <span class="flex gap-0.5 ml-1">
                        <span class="dot1 w-1.5 h-1.5 bg-slate-500 rounded-full"></span>
                        <span class="dot2 w-1.5 h-1.5 bg-slate-500 rounded-full"></span>
                        <span class="dot3 w-1.5 h-1.5 bg-slate-500 rounded-full"></span>
                    </span>
                </p>


                <div class="mb-3">
                    <div class="w-full h-4 bg-slate-100 rounded-full border-2 border-slate-900 overflow-hidden">
                        <div class="progress-bar h-full bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
                    </div>
                </div>
                <p class="text-center text-xs text-slate-400 tracking-wide">
                    Fetching career roadmap &amp; mentor availability
                </p>

            </div>

        </div>
    )
}

export default LoadingScreen
