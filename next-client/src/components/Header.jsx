import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header class="w-full bg-navy text-white px-6 lg:px-12 py-5 border-b-2 border-navy sticky top-0 z-40">
            <div class="max-w-7xl mx-auto flex items-center justify-between">
                <Link to="/" class="flex items-center space-x-3 group">
                    <div class="w-9 h-9 bg-yellow border-2 border-navy text-navy font-grotesk font-medium text-lg flex items-center justify-center">
                        CB
                    </div>
                    <div class="flex flex-col">
                        <span class="font-grotesk font-medium text-xl tracking-tight text-white leading-none">
                            CAREER<span class="text-yellow">BRIDGE</span>
                        </span>
                        <span class="font-mono text-[10px] font-bold text-parchment-dim tracking-wider uppercase">
                            India Guidance Portal
                        </span>
                    </div>
                </Link>

                <nav class="hidden md:flex items-center space-x-6 font-grotesk font-medium text-sm text-parchment-dim">
                    <a href="#how-it-works" class="hover:text-white transition-colors">How It Works</a>
                    <a href="#audiences" class="hover:text-white transition-colors">For Mentors</a>
                    <a href="#previews" class="hover:text-white transition-colors">Directory Preview</a>
                    <a href="#credits" class="hover:text-white transition-colors">Credits & Pricing</a>
                </nav>

                <div class="flex items-center space-x-4">
                    <Link to="/login" class="font-grotesk font-medium text-sm text-parchment-dim hover:text-white">
                        Log In
                    </Link>
                    <Link
                        to={"/register"}
                        class="bg-rust text-white font-grotesk font-medium text-xs px-5 py-2.5 rounded-full border border-navy hover:bg-rust/90 transition-all"
                    >
                        Get Started Free →
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header
