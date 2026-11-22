<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Our Digital Love Card — Forever & Always</title>
    
    <!-- Google Fonts: Romantic Script, Editorial Serif & Clean Sans -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Great+Vibes&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        blush: {
                            50: '#FFF9FA',
                            100: '#FFF0F3',
                            200: '#FFE0E6',
                            300: '#FFC2D1',
                            400: '#FF8FA3',
                            500: '#E11D48',
                            700: '#9F1239',
                            900: '#4C0519',
                        },
                        cream: {
                            50: '#FDFBF7',
                            100: '#F9F4EC',
                            200: '#F2E8D9',
                        },
                        gold: {
                            300: '#E5C787',
                            400: '#D4AF37',
                            500: '#B5922A',
                        }
                    },
                    fontFamily: {
                        script: ['"Great Vibes"', 'cursive'],
                        serif: ['"Cormorant Garamond"', 'serif'],
                        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                    }
                }
            }
        }
    </script>

    <style>
        /* Custom Romantic Styling & 3D Postcard Mechanics */
        body {
            background: linear-gradient(135deg, #FFF9FA 0%, #FDFBF7 45%, #FFF0F3 100%);
            color: #4C0519;
            overflow-x: hidden;
        }

        /* Subtle Ambient Paper & Glass Card Elevation */
        .love-card-box {
            background: rgba(255, 255, 255, 0.82);
            backdrop-filter: blur(14px);
            -webkit-backdrop-filter: blur(14px);
            border: 1px solid rgba(212, 175, 55, 0.28);
            box-shadow: 0 20px 50px -15px rgba(159, 18, 57, 0.09), 0 4px 16px -4px rgba(212, 175, 55, 0.12);
        }

        /* Parchment Texture for Poem */
        .parchment-sheet {
            background-color: #FDF9F1;
            background-image: 
                radial-gradient(rgba(212, 175, 55, 0.12) 1px, transparent 0),
                linear-gradient(to bottom, rgba(255,255,255,0.6), rgba(249,244,236,0.9));
            background-size: 24px 24px, 100% 100%;
            box-shadow: inset 0 0 40px rgba(212, 175, 55, 0.12), 0 10px 30px rgba(76, 5, 25, 0.06);
        }

        /* 3D Flip Card Styles */
        .perspective-container {
            perspective: 1600px;
        }
        .postcard-inner {
            position: relative;
            width: 100%;
            transition: transform 0.85s cubic-bezier(0.34, 1.56, 0.64, 1);
            transform-style: preserve-3d;
        }
        .postcard-inner.is-flipped {
            transform: rotateY(180deg);
        }
        .postcard-face {
            width: 100%;
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
        }
        .postcard-back {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            transform: rotateY(180deg);
        }

        /* Postage Stamp Serrated Edge Effect */
        .postage-stamp {
            background: #FFF9FA;
            padding: 6px;
            border: 2px dashed #D4AF37;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }

        /* Scroll Reveal Animation */
        .reveal-section {
            opacity: 0;
            transform: translateY(28px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .reveal-section.visible {
            opacity: 1;
            transform: translateY(0);
        }

        /* Floating Background Heart Animation */
        @keyframes floatUp {
            0% {
                transform: translateY(105vh) scale(0.6) rotate(0deg);
                opacity: 0;
            }
            15% {
                opacity: 0.55;
            }
            85% {
                opacity: 0.45;
            }
            100% {
                transform: translateY(-10vh) scale(1.15) rotate(25deg);
                opacity: 0;
            }
        }
        .ambient-heart {
            position: fixed;
            pointer-events: none;
            z-index: 0;
            animation: floatUp linear infinite;
            color: #FF8FA3;
        }

        /* Heart Burst Particle Animation */
        @keyframes burstParticle {
            0% {
                transform: translate(0, 0) scale(0.5);
                opacity: 1;
            }
            100% {
                transform: translate(var(--tx), var(--ty)) scale(1.4) rotate(var(--rot));
                opacity: 0;
            }
        }
        .burst-heart {
            position: fixed;
            pointer-events: none;
            z-index: 9999;
            animation: burstParticle 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #FFF9FA;
        }
        ::-webkit-scrollbar-thumb {
            background: #FFC2D1;
            border-radius: 9999px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #FF8FA3;
        }
    </style>
</head>
<body class="font-sans antialiased selection:bg-blush-200 selection:text-blush-900 relative">

    <!-- Ambient Floating Hearts Container -->
    <div id="ambient-hearts-layer" aria-hidden="true"></div>

    <!-- Floating Top Controls: Music Toggle & Customize Card Mode -->
    <header class="fixed top-4 left-0 right-0 z-40 px-4 sm:px-6 pointer-events-none">
        <div class="max-w-5xl mx-auto flex items-center justify-between">
            <!-- Music Toggle Pill -->
            <button id="music-toggle-btn" onclick="toggleAmbientMusic()" class="pointer-events-auto flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/90 backdrop-blur-md border border-gold-300/60 shadow-md hover:shadow-lg hover:bg-blush-50 transition-all text-blush-900 text-xs sm:text-sm font-medium group">
                <span id="music-icon" class="w-6 h-6 rounded-full bg-blush-100 text-blush-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
                </span>
                <span id="music-label">Play Melody</span>
            </button>

            <!-- Customize Mode Pill -->
            <div class="pointer-events-auto flex items-center gap-2">
                <button id="customize-toggle-btn" onclick="toggleCustomizeModal()" class="flex items-center gap-2 px-4 py-2.5 rounded-full bg-blush-900 text-cream-50 border border-gold-400/50 shadow-md hover:bg-blush-700 transition-all text-xs sm:text-sm font-medium">
                    <svg class="w-4 h-4 text-gold-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
                    <span>Customize Card</span>
                </button>
            </div>
        </div>
    </header>

    <!-- Main Container -->
    <main class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 space-y-12 sm:space-y-16">

        <!-- =====================================================================
             1. HERO / HEADER BANNER
        ====================================================================== -->
        <section id="hero-section" class="love-card-box rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden">
            <!-- Decorative Corner Flourishes -->
            <div class="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-gold-400/50 rounded-tl-2xl pointer-events-none"></div>
            <div class="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-gold-400/50 rounded-tr-2xl pointer-events-none"></div>
            <div class="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-gold-400/50 rounded-bl-2xl pointer-events-none"></div>
            <div class="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-gold-400/50 rounded-br-2xl pointer-events-none"></div>

            <!-- Subtle Radial Glow -->
            <div class="w-72 h-72 bg-blush-300/25 rounded-full blur-3xl absolute -top-20 left-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div class="relative z-10 max-w-2xl mx-auto space-y-5">
                <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blush-100/80 border border-blush-300/60 text-blush-700 text-xs uppercase tracking-[0.2em] font-semibold">
                    <span>♥</span>
                    <span id="display-hero-badge">A Digital Keepsake of Us</span>
                    <span>♥</span>
                </div>

                <h1 id="display-couple-names" class="font-script text-5xl sm:text-7xl lg:text-8xl text-blush-900 leading-tight pt-2 drop-shadow-sm">
                    Clara &amp; Julian
                </h1>

                <p id="display-hero-subtitle" class="font-serif italic text-xl sm:text-2xl text-blush-700/90 leading-relaxed">
                    "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine."
                </p>

                <div class="pt-4 flex flex-wrap items-center justify-center gap-4">
                    <a href="#counter-section" class="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-blush-700 to-blush-500 text-white font-medium text-sm sm:text-base shadow-lg shadow-blush-500/25 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                        <span>Open Our Love Story</span>
                        <svg class="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
                    </a>
                </div>
            </div>
        </section>

        <!-- =====================================================================
             2. DATE & TIME COUNTER SECTION BOX
        ====================================================================== -->
        <section id="counter-section" class="reveal-section love-card-box rounded-3xl p-6 sm:p-10">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-blush-200/70">
                <div>
                    <span class="text-xs uppercase tracking-[0.2em] text-gold-500 font-semibold">Every Second Counts</span>
                    <h2 class="font-serif text-3xl sm:text-4xl font-semibold text-blush-900 mt-1">Our Time Together</h2>
                </div>
                
                <!-- Inline Anniversary Date Picker -->
                <div class="flex items-center gap-3 bg-cream-100/90 px-4 py-2.5 rounded-2xl border border-gold-300/50">
                    <label for="inline-start-date" class="text-xs font-medium text-blush-700 whitespace-nowrap">Since Date:</label>
                    <input type="datetime-local" id="inline-start-date" class="bg-transparent text-xs sm:text-sm font-semibold text-blush-900 focus:outline-none cursor-pointer">
                </div>
            </div>

            <!-- 6-Unit Aligned Live Counter Grid -->
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mt-7">
                <div class="bg-gradient-to-b from-blush-50 to-white border border-blush-200/80 rounded-2xl p-4 text-center shadow-sm">
                    <div id="count-years" class="font-serif text-3xl sm:text-4xl font-bold text-blush-700">0</div>
                    <div class="text-xs uppercase tracking-widest text-blush-900/60 mt-1 font-medium">Years</div>
                </div>
                <div class="bg-gradient-to-b from-blush-50 to-white border border-blush-200/80 rounded-2xl p-4 text-center shadow-sm">
                    <div id="count-months" class="font-serif text-3xl sm:text-4xl font-bold text-blush-700">0</div>
                    <div class="text-xs uppercase tracking-widest text-blush-900/60 mt-1 font-medium">Months</div>
                </div>
                <div class="bg-gradient-to-b from-blush-50 to-white border border-blush-200/80 rounded-2xl p-4 text-center shadow-sm">
                    <div id="count-days" class="font-serif text-3xl sm:text-4xl font-bold text-blush-700">0</div>
                    <div class="text-xs uppercase tracking-widest text-blush-900/60 mt-1 font-medium">Days</div>
                </div>
                <div class="bg-gradient-to-b from-blush-50 to-white border border-blush-200/80 rounded-2xl p-4 text-center shadow-sm">
                    <div id="count-hours" class="font-serif text-3xl sm:text-4xl font-bold text-blush-700">00</div>
                    <div class="text-xs uppercase tracking-widest text-blush-900/60 mt-1 font-medium">Hours</div>
                </div>
                <div class="bg-gradient-to-b from-blush-50 to-white border border-blush-200/80 rounded-2xl p-4 text-center shadow-sm">
                    <div id="count-minutes" class="font-serif text-3xl sm:text-4xl font-bold text-blush-700">00</div>
                    <div class="text-xs uppercase tracking-widest text-blush-900/60 mt-1 font-medium">Minutes</div>
                </div>
                <div class="bg-gradient-to-b from-blush-100/70 to-white border border-gold-400/50 rounded-2xl p-4 text-center shadow-sm relative overflow-hidden">
                    <div id="count-seconds" class="font-serif text-3xl sm:text-4xl font-bold text-blush-500">00</div>
                    <div class="text-xs uppercase tracking-widest text-blush-900/60 mt-1 font-medium">Seconds</div>
                </div>
            </div>

            <p id="total-days-summary" class="text-center font-serif italic text-base sm:text-lg text-blush-700/80 mt-6">
                Calculating every heartbeat shared together...
            </p>
        </section>

        <!-- =====================================================================
             3. PHOTO BOX SECTION (POLAROID GALLERY + UPLOAD + LIGHTBOX)
        ====================================================================== -->
        <section id="photo-section" class="reveal-section love-card-box rounded-3xl p-6 sm:p-10">
            <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-blush-200/70">
                <div>
                    <span class="text-xs uppercase tracking-[0.2em] text-gold-500 font-semibold">Captured Moments</span>
                    <h2 class="font-serif text-3xl sm:text-4xl font-semibold text-blush-900 mt-1">Our Photo Keepsakes</h2>
                </div>
                <label class="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-blush-100 hover:bg-blush-200 text-blush-900 text-xs sm:text-sm font-medium cursor-pointer transition-colors self-start sm:self-auto border border-blush-300/60">
                    <svg class="w-4 h-4 text-blush-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                    <span>Add / Replace Photo</span>
                    <input type="file" id="photo-upload-input" accept="image/*" class="hidden" onchange="handlePhotoUpload(event)">
                </label>
            </div>

            <!-- 4-Card Responsive Polaroid Grid -->
            <div id="photo-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                <!-- Populated dynamically via JS with default romantic memories & user uploads -->
            </div>
        </section>

        <!-- =====================================================================
             4. POEM SECTION BOX
        ====================================================================== -->
        <section id="poem-section" class="reveal-section love-card-box rounded-3xl p-6 sm:p-10">
            <div class="flex items-center justify-between pb-6 border-b border-blush-200/70">
                <div>
                    <span class="text-xs uppercase tracking-[0.2em] text-gold-500 font-semibold">Written From The Soul</span>
                    <h2 class="font-serif text-3xl sm:text-4xl font-semibold text-blush-900 mt-1">A Poem For You</h2>
                </div>
                <button onclick="toggleCustomizeModal('poem')" class="px-4 py-2 rounded-full bg-cream-100 hover:bg-cream-200 text-blush-900 text-xs font-medium border border-gold-300/60 transition-colors">
                    Edit Poem
                </button>
            </div>

            <!-- Textured Stationery Sheet -->
            <div class="parchment-sheet rounded-2xl p-8 sm:p-12 mt-7 border border-gold-300/50 relative max-w-3xl mx-auto text-center">
                <div class="text-gold-400 text-2xl mb-3 select-none">❦</div>
                <h3 id="display-poem-title" class="font-serif italic text-2xl sm:text-3xl font-semibold text-blush-900 mb-6">
                    Beneath the Same Golden Sky
                </h3>
                <div id="display-poem-body" class="font-serif text-lg sm:text-xl text-blush-900/90 leading-relaxed whitespace-pre-line space-y-4">
Before our paths had ever crossed,
The quiet days felt incomplete,
Until your laughter found my heart
And turned each passing hour sweet.

Through gentle rain and sunlit mornings,
In every glance and whispered word,
You are the home I always longed for,
The sweetest song I’ve ever heard.

So take my hand through all tomorrows,
As seasons turn and years unfold—
My favorite place will always be
Right next to you as we grow old.
                </div>
                <div class="mt-8 pt-4 border-t border-gold-300/40 inline-block px-8">
                    <p id="display-poem-signoff" class="font-script text-3xl text-blush-700">Forever Yours</p>
                </div>
            </div>
        </section>

        <!-- =====================================================================
             5. ANNIVERSARY POSTCARD SECTION BOX (3D FLIPPABLE)
        ====================================================================== -->
        <section id="postcard-section" class="reveal-section love-card-box rounded-3xl p-6 sm:p-10">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-blush-200/70">
                <div>
                    <span class="text-xs uppercase tracking-[0.2em] text-gold-500 font-semibold">Sealed With Love</span>
                    <h2 class="font-serif text-3xl sm:text-4xl font-semibold text-blush-900 mt-1">Anniversary Postcard</h2>
                </div>
                <button onclick="flipPostcard()" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blush-900 hover:bg-blush-700 text-cream-50 text-xs sm:text-sm font-medium shadow-md transition-all self-start sm:self-auto">
                    <svg class="w-4 h-4 text-gold-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                    <span>Flip Postcard</span>
                </button>
            </div>

            <!-- 3D Flip Container -->
            <div class="perspective-container mt-8 max-w-3xl mx-auto">
                <div id="postcard-inner" class="postcard-inner cursor-pointer" onclick="flipPostcard()" title="Click to flip postcard">
                    
                    <!-- FRONT OF POSTCARD -->
                    <div class="postcard-face rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-blush-900 relative min-h-[380px] sm:min-h-[420px] flex flex-col justify-between p-6 sm:p-10 text-white">
                        <!-- Romantic Sunset/Floral Scenic Background -->
                        <img src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1200&q=80" 
                             onerror="this.style.display='none'" 
                             alt="Romantic Postcard Cover" 
                             class="absolute inset-0 w-full h-full object-cover opacity-55 mix-blend-luminosity">
                        <div class="absolute inset-0 bg-gradient-to-tr from-blush-900/90 via-blush-700/60 to-gold-500/30"></div>

                        <!-- Top Stamp & Postmark Badge -->
                        <div class="relative z-10 flex justify-between items-start">
                            <span class="px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-xs tracking-widest uppercase">
                                Special Delivery
                            </span>
                            <div class="w-16 h-20 rounded bg-cream-50/95 p-1.5 border-2 border-dashed border-gold-400 flex flex-col items-center justify-center text-blush-900 shadow-md rotate-3">
                                <span class="text-xl text-blush-500">♥</span>
                                <span class="text-[9px] font-bold uppercase tracking-tighter mt-1">LOVE POST</span>
                                <span class="text-[8px] text-blush-700">FOREVER</span>
                            </div>
                        </div>

                        <!-- Center Calligraphy -->
                        <div class="relative z-10 text-center my-auto py-6">
                            <p class="text-xs sm:text-sm uppercase tracking-[0.3em] text-gold-300 mb-2">Celebrating Us</p>
                            <h3 class="font-script text-5xl sm:text-7xl text-white drop-shadow-md">Happy Anniversary</h3>
                            <p id="display-postcard-front-sub" class="font-serif italic text-lg sm:text-xl text-blush-100 mt-2">
                                Every love story is beautiful, but ours is my favorite.
                            </p>
                        </div>

                        <!-- Bottom Hint -->
                        <div class="relative z-10 flex items-center justify-between text-xs text-blush-100/80 border-t border-white/20 pt-3">
                            <span id="display-postcard-date-front">Est. October 14</span>
                            <span class="flex items-center gap-1 font-medium text-gold-300">Tap to read message ↻</span>
                        </div>
                    </div>

                    <!-- BACK OF POSTCARD -->
                    <div class="postcard-face postcard-back rounded-2xl shadow-xl border-4 border-white parchment-sheet p-6 sm:p-9 min-h-[380px] sm:min-h-[420px] flex flex-col justify-between text-blush-900">
                        <div class="grid grid-cols-1 md:grid-cols-12 gap-6 h-full">
                            
                            <!-- Left Half: Handwritten Love Note -->
                            <div class="md:col-span-7 md:border-r md:border-blush-300/60 md:pr-6 flex flex-col justify-between">
                                <div>
                                    <p class="font-serif italic text-sm text-blush-700 mb-2" id="display-postcard-salutation">My Dearest Love,</p>
                                    <p id="display-postcard-message" class="font-serif text-base sm:text-lg leading-relaxed text-blush-900/95">
                                        Looking back at all the memories we have created together fills my heart with endless gratitude. Thank you for being my best friend, my safe harbor, and my greatest adventure. Here is to a lifetime more of laughter, late-night talks, and growing closer every single day.
                                    </p>
                                </div>
                                <p id="display-postcard-signature" class="font-script text-3xl text-blush-700 mt-4">With all my heart, Always</p>
                            </div>

                            <!-- Right Half: Postage Stamp, Postmark & Address Lines -->
                            <div class="md:col-span-5 flex flex-col justify-between">
                                <div class="flex justify-end items-start gap-2">
                                    <!-- Circular Postmark -->
                                    <div class="w-16 h-16 rounded-full border border-blush-400/60 flex flex-col items-center justify-center text-[9px] text-blush-700/80 uppercase tracking-wider -rotate-12 select-none">
                                        <span>HEARTVILLE</span>
                                        <span class="font-bold text-[10px]" id="postcard-postmark-year">2026</span>
                                        <span>PAID ♥</span>
                                    </div>
                                    <!-- Stamp -->
                                    <div class="postage-stamp w-16 h-20 flex flex-col items-center justify-center text-center">
                                        <span class="text-2xl text-blush-500">❦</span>
                                        <span class="text-[8px] font-bold uppercase tracking-widest text-blush-900 mt-1">1st Class</span>
                                        <span class="text-[8px] text-gold-500 font-semibold">AMOUR</span>
                                    </div>
                                </div>

                                <!-- Address Lines -->
                                <div class="space-y-3 mt-6">
                                    <div class="border-b border-blush-300/80 pb-1 text-xs uppercase tracking-widest text-blush-700/70">
                                        To: <span id="display-postcard-to" class="font-serif normal-case text-base text-blush-900 font-semibold ml-1">The Love of My Life</span>
                                    </div>
                                    <div class="border-b border-blush-300/80 pb-1 font-serif italic text-sm text-blush-900/80" id="display-postcard-address1">
                                        143 Forever Lane, Suite ∞
                                    </div>
                                    <div class="border-b border-blush-300/80 pb-1 font-serif italic text-sm text-blush-900/80" id="display-postcard-address2">
                                        Right Inside My Heart
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="text-right text-xs text-blush-700/70 pt-3 mt-3 border-t border-blush-200/60">
                            Click anywhere on card to flip back ↺
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- =====================================================================
             6. VIDEO BOX SECTION (DEFAULT ANIMATED MEMORY REEL + YOUTUBE/LOCAL)
        ====================================================================== -->
        <section id="video-section" class="reveal-section love-card-box rounded-3xl p-6 sm:p-10">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-blush-200/70">
                <div>
                    <span class="text-xs uppercase tracking-[0.2em] text-gold-500 font-semibold">Motion &amp; Memories</span>
                    <h2 class="font-serif text-3xl sm:text-4xl font-semibold text-blush-900 mt-1">Our Love Reel</h2>
                </div>

                <!-- Video Source Controls -->
                <div class="flex flex-wrap items-center gap-2">
                    <button onclick="switchToMemoryReel()" id="btn-reel-mode" class="px-3.5 py-2 rounded-full bg-blush-700 text-white text-xs font-medium transition-colors">
                        Romantic Reel
                    </button>
                    <label class="px-3.5 py-2 rounded-full bg-blush-100 hover:bg-blush-200 text-blush-900 text-xs font-medium cursor-pointer transition-colors border border-blush-300/60">
                        Upload Video (.mp4)
                        <input type="file" accept="video/*" class="hidden" onchange="handleLocalVideoUpload(event)">
                    </label>
                    <button onclick="toggleYoutubeInput()" class="px-3.5 py-2 rounded-full bg-cream-100 hover:bg-cream-200 text-blush-900 text-xs font-medium border border-gold-300/60 transition-colors">
                        YouTube Link
                    </button>
                </div>
            </div>

            <!-- Collapsible YouTube URL Bar -->
            <div id="youtube-url-bar" class="hidden mt-4 p-3 rounded-2xl bg-blush-50 border border-blush-200 flex flex-col sm:flex-row gap-2">
                <input type="text" id="youtube-url-input" placeholder="Paste YouTube link (e.g., https://www.youtube.com/watch?v=...)" class="flex-1 px-4 py-2 rounded-xl bg-white border border-blush-200 text-sm focus:outline-none focus:border-blush-500">
                <button onclick="loadYoutubeVideo()" class="px-5 py-2 rounded-xl bg-blush-700 text-white text-sm font-medium hover:bg-blush-900 transition-colors">
                    Embed Video
                </button>
            </div>

            <!-- Framed Video Display Box -->
            <div class="mt-7 rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-blush-900 relative aspect-video max-w-4xl mx-auto">
                <!-- Mode 1: Built-in Interactive Canvas Romantic Memory Reel (Always Works!) -->
                <div id="canvas-reel-wrapper" class="w-full h-full relative">
                    <canvas id="love-reel-canvas" class="w-full h-full block"></canvas>
                    <button id="reel-play-pause-btn" onclick="toggleReelPlayback()" class="absolute bottom-4 right-4 px-4 py-2 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-md text-white text-xs font-medium border border-white/25 transition-all flex items-center gap-1.5">
                        <span id="reel-status-dot" class="w-2 h-2 rounded-full bg-blush-400 animate-pulse"></span>
                        <span id="reel-btn-text">Pause Reel</span>
                    </button>
                </div>

                <!-- Mode 2: Local Uploaded HTML5 Video -->
                <video id="local-video-player" controls class="hidden w-full h-full object-contain bg-black"></video>

                <!-- Mode 3: YouTube Embed Iframe -->
                <iframe id="youtube-iframe-player" class="hidden w-full h-full" src="" title="Love Video Memory" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </section>

        <!-- =====================================================================
             7. FOOTER & VIRTUAL KISS / HEART BURST
        ====================================================================== -->
        <footer class="reveal-section love-card-box rounded-3xl p-8 sm:p-12 text-center space-y-5">
            <div class="w-12 h-12 mx-auto rounded-full bg-blush-100 border border-blush-300 flex items-center justify-center text-blush-600 text-xl">
                ♥
            </div>
            <h3 id="display-footer-quote" class="font-script text-4xl sm:text-5xl text-blush-900">
                Forever &amp; Always, My Love
            </h3>
            <p class="text-sm text-blush-700/80 max-w-md mx-auto">
                Crafted with every beat of my heart. Tap below whenever you want to feel my love surround you.
            </p>
            <div class="pt-2">
                <button id="heart-burst-btn" onclick="triggerHeartBurst(event)" class="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-blush-500 via-blush-700 to-blush-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-blush-500/30 hover:scale-105 active:scale-95 transition-all">
                    <span>Send Virtual Kiss &amp; Heart Burst</span>
                    <span class="text-lg">💋✨</span>
                </button>
            </div>
            <div id="kiss-counter-badge" class="text-xs font-medium text-gold-500 tracking-wider uppercase pt-2">
                Virtual Kisses Sent: <span id="kiss-count">0</span>
            </div>
        </footer>

    </main>

    <!-- =========================================================================
         PHOTO LIGHTBOX MODAL
    ========================================================================== -->
    <div id="lightbox-modal" class="fixed inset-0 z-50 hidden bg-blush-900/90 backdrop-blur-md flex items-center justify-center p-4" onclick="closeLightbox(event)">
        <div class="bg-white rounded-3xl p-4 sm:p-6 max-w-2xl w-full shadow-2xl relative animate-fadeIn" onclick="event.stopPropagation()">
            <button onclick="closeLightbox()" class="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-blush-900 text-white flex items-center justify-center shadow-lg hover:bg-blush-700 transition-colors">
                ✕
            </button>
            <img id="lightbox-img" src="" alt="Enlarged Memory" class="w-full max-h-[68vh] object-cover rounded-2xl">
            <div class="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-1">
                <div>
                    <h4 id="lightbox-caption" class="font-serif text-xl sm:text-2xl font-semibold text-blush-900"></h4>
                    <p id="lightbox-date" class="text-xs uppercase tracking-widest text-gold-500 font-semibold mt-0.5"></p>
                </div>
                <label class="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-blush-100 hover:bg-blush-200 text-blush-900 text-xs font-medium cursor-pointer transition-colors">
                    <span>Replace This Photo</span>
                    <input type="file" accept="image/*" class="hidden" onchange="replaceCurrentLightboxPhoto(event)">
                </label>
            </div>
        </div>
    </div>

    <!-- =========================================================================
         CUSTOMIZE LOVE CARD MODAL (SAVES TO LOCALSTORAGE)
    ========================================================================== -->
    <div id="customize-modal" class="fixed inset-0 z-50 hidden bg-blush-900/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
        <div class="bg-cream-50 border border-gold-300 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl my-8 max-h-[90vh] overflow-y-auto">
            <div class="flex items-center justify-between pb-4 border-b border-blush-200">
                <div>
                    <span class="text-xs uppercase tracking-widest text-gold-500 font-semibold">Personalize Keepsake</span>
                    <h3 class="font-serif text-2xl sm:text-3xl font-bold text-blush-900">Customize Your Love Card</h3>
                </div>
                <button onclick="toggleCustomizeModal()" class="w-9 h-9 rounded-full bg-blush-100 text-blush-900 hover:bg-blush-200 flex items-center justify-center font-bold">
                    ✕
                </button>
            </div>

            <form id="customize-form" onsubmit="saveCustomizations(event)" class="space-y-5 mt-5">
                <!-- Couple Names & Subtitle -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs font-semibold uppercase tracking-wider text-blush-700 mb-1">Couple's Names</label>
                        <input type="text" id="input-couple-names" class="w-full px-4 py-2.5 rounded-xl bg-white border border-blush-200 text-sm focus:outline-none focus:border-blush-500" required>
                    </div>
                    <div>
                        <label class="block text-xs font-semibold uppercase tracking-wider text-blush-700 mb-1">Anniversary Start Date &amp; Time</label>
                        <input type="datetime-local" id="input-start-date" class="w-full px-4 py-2.5 rounded-xl bg-white border border-blush-200 text-sm focus:outline-none focus:border-blush-500" required>
                    </div>
                </div>

                <div>
                    <label class="block text-xs font-semibold uppercase tracking-wider text-blush-700 mb-1">Hero Romantic Quote</label>
                    <input type="text" id="input-hero-subtitle" class="w-full px-4 py-2.5 rounded-xl bg-white border border-blush-200 text-sm focus:outline-none focus:border-blush-500">
                </div>

                <!-- Poem Settings -->
                <div class="pt-2 border-t border-blush-200/70">
                    <label class="block text-xs font-semibold uppercase tracking-wider text-blush-700 mb-1">Poem Title</label>
                    <input type="text" id="input-poem-title" class="w-full px-4 py-2.5 rounded-xl bg-white border border-blush-200 text-sm mb-3 focus:outline-none focus:border-blush-500">
                    
                    <label class="block text-xs font-semibold uppercase tracking-wider text-blush-700 mb-1">Poem Verses</label>
                    <textarea id="input-poem-body" rows="5" class="w-full px-4 py-2.5 rounded-xl bg-white border border-blush-200 text-sm font-serif text-base focus:outline-none focus:border-blush-500"></textarea>
                </div>

                <!-- Postcard Settings -->
                <div class="pt-2 border-t border-blush-200/70 space-y-3">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-xs font-semibold uppercase tracking-wider text-blush-700 mb-1">Postcard Recipient ("To:")</label>
                            <input type="text" id="input-postcard-to" class="w-full px-4 py-2.5 rounded-xl bg-white border border-blush-200 text-sm focus:outline-none focus:border-blush-500">
                        </div>
                        <div>
                            <label class="block text-xs font-semibold uppercase tracking-wider text-blush-700 mb-1">Postcard Sign-Off</label>
                            <input type="text" id="input-postcard-signature" class="w-full px-4 py-2.5 rounded-xl bg-white border border-blush-200 text-sm focus:outline-none focus:border-blush-500">
                        </div>
                    </div>
                    <div>
                        <label class="block text-xs font-semibold uppercase tracking-wider text-blush-700 mb-1">Postcard Love Letter</label>
                        <textarea id="input-postcard-message" rows="3" class="w-full px-4 py-2.5 rounded-xl bg-white border border-blush-200 text-sm focus:outline-none focus:border-blush-500"></textarea>
                    </div>
                </div>

                <!-- Action Buttons -->
                <div class="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-blush-200">
                    <button type="button" onclick="resetToDefaults()" class="px-4 py-2.5 rounded-full text-xs font-medium text-blush-700 hover:bg-blush-100 transition-colors">
                        Reset Defaults
                    </button>
                    <div class="flex items-center gap-2">
                        <button type="button" onclick="toggleCustomizeModal()" class="px-5 py-2.5 rounded-full bg-white border border-blush-200 text-xs sm:text-sm font-medium text-blush-900 hover:bg-blush-50">
                            Cancel
                        </button>
                        <button type="submit" class="px-6 py-2.5 rounded-full bg-blush-700 text-white text-xs sm:text-sm font-semibold shadow-md hover:bg-blush-900 transition-colors">
                            Save &amp; Update Card
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <!-- Toast Notification Banner -->
    <div id="toast-banner" class="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none opacity-0 transition-all duration-300 translate-y-4">
        <div id="toast-text" class="px-6 py-3 rounded-full bg-blush-900 text-cream-50 text-xs sm:text-sm font-medium shadow-xl border border-gold-400/50">
            Saved with love!
        </div>
    </div>

    <!-- =========================================================================
         JAVASCRIPT LOGIC: STATE, COUNTER, WEB AUDIO, 3D CARD, REEL & GALLERY
    ========================================================================== -->
    <script>
        /* ---------------------------------------------------------------------
           1. DEFAULT DATA & LOCALSTORAGE PERSISTENCE
        ---------------------------------------------------------------------- */
        const STORAGE_KEY = 'digital_love_card_v1';

        const DEFAULT_DATA = {
            coupleNames: 'Clara & Julian',
            startDate: '2022-10-14T18:30',
            heroSubtitle: '"In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine."',
            poemTitle: 'Beneath the Same Golden Sky',
            poemBody: `Before our paths had ever crossed,\nThe quiet days felt incomplete,\nUntil your laughter found my heart\nAnd turned each passing hour sweet.\n\nThrough gentle rain and sunlit mornings,\nIn every glance and whispered word,\nYou are the home I always longed for,\nThe sweetest song I’ve ever heard.\n\nSo take my hand through all tomorrows,\nAs seasons turn and years unfold—\nMy favorite place will always be\nRight next to you as we grow old.`,
            postcardTo: 'The Love of My Life',
            postcardMessage: 'Looking back at all the memories we have created together fills my heart with endless gratitude. Thank you for being my best friend, my safe harbor, and my greatest adventure. Here is to a lifetime more of laughter, late-night talks, and growing closer every single day.',
            postcardSignature: 'With all my heart, Always',
            kissCount: 14,
            photos: [
                {
                    id: 1,
                    src: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80',
                    caption: 'Golden Hour Walk',
                    date: 'Autumn 2022'
                },
                {
                    id: 2,
                    src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80',
                    caption: 'Coffee & Morning Sun',
                    date: 'Spring 2023'
                },
                {
                    id: 3,
                    src: 'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?auto=format&fit=crop&w=800&q=80',
                    caption: 'Dancing Under Stars',
                    date: 'Summer 2024'
                },
                {
                    id: 4,
                    src: 'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?auto=format&fit=crop&w=800&q=80',
                    caption: 'Forever & Always',
                    date: 'Our Anniversary'
                }
            ]
        };

        let cardData = loadCardData();
        let activeLightboxIndex = 0;

        function loadCardData() {
            try {
                const saved = localStorage.getItem(STORAGE_KEY);
                if (saved) {
                    return { ...DEFAULT_DATA, ...JSON.parse(saved) };
                }
            } catch (e) {
                console.warn('Could not read localStorage:', e);
            }
            return JSON.parse(JSON.stringify(DEFAULT_DATA));
        }

        function persistCardData() {
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(cardData));
            } catch (e) {
                showToast('Note: Large image kept for this session.');
            }
        }

        function showToast(msg) {
            const banner = document.getElementById('toast-banner');
            const text = document.getElementById('toast-text');
            text.textContent = msg;
            banner.classList.remove('opacity-0', 'translate-y-4');
            clearTimeout(window._toastTimer);
            window._toastTimer = setTimeout(() => {
                banner.classList.add('opacity-0', 'translate-y-4');
            }, 2800);
        }

        /* ---------------------------------------------------------------------
           2. RENDER CARD CONTENT TO DOM
        ---------------------------------------------------------------------- */
        function renderAllSections() {
            document.getElementById('display-couple-names').textContent = cardData.coupleNames;
            document.getElementById('display-hero-subtitle').textContent = cardData.heroSubtitle;
            document.getElementById('display-poem-title').textContent = cardData.poemTitle;
            document.getElementById('display-poem-body').textContent = cardData.poemBody;
            
            document.getElementById('display-postcard-to').textContent = cardData.postcardTo;
            document.getElementById('display-postcard-message').textContent = cardData.postcardMessage;
            document.getElementById('display-postcard-signature').textContent = cardData.postcardSignature;
            document.getElementById('kiss-count').textContent = cardData.kissCount;

            // Sync inline date picker
            const inlineDate = document.getElementById('inline-start-date');
            inlineDate.value = cardData.startDate;

            // Format front postcard date label
            const parsedStart = new Date(cardData.startDate);
            if (!isNaN(parsedStart.getTime())) {
                const formatted = parsedStart.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
                document.getElementById('display-postcard-date-front').textContent = `Together Since ${formatted}`;
            }

            renderPhotoGrid();
        }

        /* ---------------------------------------------------------------------
           3. LIVE RELATIONSHIP DATE & TIME COUNTER
        ---------------------------------------------------------------------- */
        function updateRelationshipCounter() {
            const start = new Date(cardData.startDate);
            const now = new Date();

            if (isNaN(start.getTime())) return;

            // If future date is chosen, clamp to 0
            if (now < start) {
                ['years', 'months', 'days', 'hours', 'minutes', 'seconds'].forEach(unit => {
                    document.getElementById(`count-${unit}`).textContent = '0';
                });
                document.getElementById('total-days-summary').textContent = 'Counting down to the start of our forever...';
                return;
            }

            // Exact calendar Years, Months, Days, Hours, Minutes, Seconds
            let years = now.getFullYear() - start.getFullYear();
            let months = now.getMonth() - start.getMonth();
            let days = now.getDate() - start.getDate();
            let hours = now.getHours() - start.getHours();
            let minutes = now.getMinutes() - start.getMinutes();
            let seconds = now.getSeconds() - start.getSeconds();

            if (seconds < 0) {
                seconds += 60;
                minutes--;
            }
            if (minutes < 0) {
                minutes += 60;
                hours--;
            }
            if (hours < 0) {
                hours += 24;
                days--;
            }
            if (days < 0) {
                const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
                days += prevMonth.getDate();
                months--;
            }
            if (months < 0) {
                months += 12;
                years--;
            }

            document.getElementById('count-years').textContent = years;
            document.getElementById('count-months').textContent = months;
            document.getElementById('count-days').textContent = days;
            document.getElementById('count-hours').textContent = String(hours).padStart(2, '0');
            document.getElementById('count-minutes').textContent = String(minutes).padStart(2, '0');
            document.getElementById('count-seconds').textContent = String(seconds).padStart(2, '0');

            const totalDays = Math.floor((now - start) / (1000 * 60 * 60 * 24));
            document.getElementById('total-days-summary').textContent = 
                `That’s ${totalDays.toLocaleString()} wonderful days of loving you — and counting.`;
        }

        document.getElementById('inline-start-date').addEventListener('change', (e) => {
            if (e.target.value) {
                cardData.startDate = e.target.value;
                persistCardData();
                renderAllSections();
                updateRelationshipCounter();
                showToast('Anniversary date updated!');
            }
        });

        /* ---------------------------------------------------------------------
           4. PHOTO GALLERY, LIGHTBOX & UPLOAD HANDLERS
        ---------------------------------------------------------------------- */
        function renderPhotoGrid() {
            const grid = document.getElementById('photo-grid');
            const rotations = ['-rotate-1', 'rotate-1', '-rotate-1', 'rotate-1'];

            grid.innerHTML = cardData.photos.map((photo, index) => `
                <div onclick="openLightbox(${index})" 
                     class="group bg-white p-3 pb-5 rounded-2xl shadow-md hover:shadow-xl border border-blush-200/80 transition-all duration-300 cursor-pointer hover:-translate-y-1.5 ${rotations[index % rotations.length]} hover:rotate-0">
                    <div class="aspect-[4/5] rounded-xl overflow-hidden bg-blush-100 relative">
                        <img src="${photo.src}" 
                             alt="${photo.caption}" 
                             onerror="this.src='https://placehold.co/600x750/FFF0F3/9F1239?text=Our+Memory'"
                             class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                        <div class="absolute inset-0 bg-blush-900/0 group-hover:bg-blush-900/15 transition-colors flex items-center justify-center">
                            <span class="opacity-0 group-hover:opacity-100 px-3 py-1 rounded-full bg-white/90 text-blush-900 text-xs font-medium shadow transition-opacity">
                                View Keepsake
                            </span>
                        </div>
                    </div>
                    <div class="mt-3 text-center px-1">
                        <p class="font-serif text-lg font-semibold text-blush-900 truncate">${photo.caption}</p>
                        <p class="text-[11px] uppercase tracking-widest text-gold-500 font-medium mt-0.5">${photo.date}</p>
                    </div>
                </div>
            `).join('');
        }

        function openLightbox(index) {
            activeLightboxIndex = index;
            const photo = cardData.photos[index];
            document.getElementById('lightbox-img').src = photo.src;
            document.getElementById('lightbox-caption').textContent = photo.caption;
            document.getElementById('lightbox-date').textContent = photo.date;
            document.getElementById('lightbox-modal').classList.remove('hidden');
        }

        function closeLightbox() {
            document.getElementById('lightbox-modal').classList.add('hidden');
        }

        function handlePhotoUpload(event) {
            const file = event.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = function(e) {
                // Rotate into the 4th slot or cycle through slots so grid stays balanced
                const targetIndex = cardData.photos.length >= 4 ? (Date.now() % 4) : cardData.photos.length;
                cardData.photos[targetIndex] = {
                    id: Date.now(),
                    src: e.target.result,
                    caption: file.name.replace(/\.[^/.]+$/, '').slice(0, 24) || 'Sweet Memory',
                    date: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
                };
                persistCardData();
                renderPhotoGrid();
                showToast('Photo added to your keepsake gallery!');
            };
            reader.readAsDataURL(file);
            event.target.value = '';
        }

        function replaceCurrentLightboxPhoto(event) {
            const file = event.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = function(e) {
                cardData.photos[activeLightboxIndex].src = e.target.result;
                document.getElementById('lightbox-img').src = e.target.result;
                persistCardData();
                renderPhotoGrid();
                showToast('Memory photo updated!');
            };
            reader.readAsDataURL(file);
            event.target.value = '';
        }

        /* ---------------------------------------------------------------------
           5. 3D ANNIVERSARY POSTCARD FLIP
        ---------------------------------------------------------------------- */
        function flipPostcard() {
            const inner = document.getElementById('postcard-inner');
            inner.classList.toggle('is-flipped');
        }

        /* ---------------------------------------------------------------------
           6. VIDEO BOX: ANIMATED CANVAS REEL, LOCAL VIDEO & YOUTUBE EMBED
        ---------------------------------------------------------------------- */
        let reelPlaying = true;
        let reelAnimationId = null;

        function initLoveReelCanvas() {
            const canvas = document.getElementById('love-reel-canvas');
            const ctx = canvas.getContext('2d');

            function resizeCanvas() {
                const rect = canvas.parentElement.getBoundingClientRect();
                canvas.width = rect.width * window.devicePixelRatio;
                canvas.height = rect.height * window.devicePixelRatio;
            }
            resizeCanvas();
            window.addEventListener('resize', resizeCanvas);

            const particles = Array.from({ length: 32 }, () => ({
                x: Math.random(),
                y: Math.random(),
                size: 8 + Math.random() * 18,
                speedY: 0.0008 + Math.random() * 0.0018,
                wobble: Math.random() * Math.PI * 2,
                opacity: 0.25 + Math.random() * 0.55
            }));

            const quotes = [
                () => cardData.coupleNames,
                () => 'Every Moment With You Is Magic',
                () => 'My Heart Belongs To You',
                () => 'Forever & Always'
            ];

            let startTime = performance.now();

            function drawHeart(x, y, size, alpha) {
                ctx.save();
                ctx.translate(x, y);
                ctx.beginPath();
                const topCurveHeight = size * 0.3;
                ctx.moveTo(0, topCurveHeight);
                ctx.bezierCurveTo(0, 0, -size / 2, 0, -size / 2, topCurveHeight);
                ctx.bezierCurveTo(-size / 2, (size + topCurveHeight) / 2, 0, (size + topCurveHeight) / 1.35, 0, size);
                ctx.bezierCurveTo(0, (size + topCurveHeight) / 1.35, size / 2, (size + topCurveHeight) / 2, size / 2, topCurveHeight);
                ctx.bezierCurveTo(size / 2, 0, 0, 0, 0, topCurveHeight);
                ctx.closePath();
                ctx.fillStyle = `rgba(255, 194, 209, ${alpha})`;
                ctx.fill();
                ctx.restore();
            }

            function renderFrame(now) {
                if (!reelPlaying) return;
                const w = canvas.width;
                const h = canvas.height;
                const elapsed = (now - startTime) / 1000;

                // Warm Romantic Gradient Backdrop
                const grad = ctx.createLinearGradient(0, 0, w, h);
                grad.addColorStop(0, '#4C0519');
                grad.addColorStop(0.5, '#881337');
                grad.addColorStop(1, '#9F1239');
                ctx.fillStyle = grad;
                ctx.fillRect(0, 0, w, h);

                // Soft Golden Spotlight Glow
                const rad = ctx.createRadialGradient(w * 0.5, h * 0.5, 10, w * 0.5, h * 0.5, w * 0.45);
                rad.addColorStop(0, 'rgba(212, 175, 55, 0.24)');
                rad.addColorStop(1, 'rgba(212, 175, 55, 0)');
                ctx.fillStyle = rad;
                ctx.fillRect(0, 0, w, h);

                // Floating Hearts
                particles.forEach(p => {
                    p.y -= p.speedY;
                    p.wobble += 0.02;
                    if (p.y < -0.1) {
                        p.y = 1.1;
                        p.x = Math.random();
                    }
                    const px = (p.x + Math.sin(p.wobble) * 0.02) * w;
                    const py = p.y * h;
                    drawHeart(px, py, p.size * (w / 800), p.opacity);
                });

                // Elegant Decorative Frame Border
                const pad = Math.min(w, h) * 0.06;
                ctx.strokeStyle = 'rgba(229, 199, 135, 0.45)';
                ctx.lineWidth = 2 * (w / 800);
                ctx.strokeRect(pad, pad, w - pad * 2, h - pad * 2);

                // Cross-fading Romantic Typography
                const slideDuration = 4.5;
                const slideIndex = Math.floor(elapsed / slideDuration) % quotes.length;
                const slideProgress = (elapsed % slideDuration) / slideDuration;
                const textAlpha = Math.sin(slideProgress * Math.PI);

                ctx.save();
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillStyle = `rgba(255, 249, 250, ${Math.max(0, textAlpha)})`;
                const fontSize = Math.max(24, Math.floor(w * 0.055));
                ctx.font = `italic ${fontSize}px "Cormorant Garamond", Georgia, serif`;
                ctx.fillText(quotes[slideIndex](), w / 2, h / 2);

                ctx.fillStyle = `rgba(229, 199, 135, ${Math.max(0, textAlpha * 0.85)})`;
                const subSize = Math.max(12, Math.floor(w * 0.018));
                ctx.font = `${subSize}px "Plus Jakarta Sans", sans-serif`;
                ctx.fillText('♥ OUR LOVE STORY IN MOTION ♥', w / 2, h / 2 + fontSize * 0.95);
                ctx.restore();

                reelAnimationId = requestAnimationFrame(renderFrame);
            }

            reelAnimationId = requestAnimationFrame(renderFrame);
        }

        function toggleReelPlayback() {
            reelPlaying = !reelPlaying;
            const btnText = document.getElementById('reel-btn-text');
            const dot = document.getElementById('reel-status-dot');
            if (reelPlaying) {
                btnText.textContent = 'Pause Reel';
                dot.classList.add('animate-pulse');
                initLoveReelCanvas();
            } else {
                btnText.textContent = 'Resume Reel';
                dot.classList.remove('animate-pulse');
                cancelAnimationFrame(reelAnimationId);
            }
        }

        function switchToMemoryReel() {
            document.getElementById('canvas-reel-wrapper').classList.remove('hidden');
            document.getElementById('local-video-player').classList.add('hidden');
            document.getElementById('local-video-player').pause();
            document.getElementById('youtube-iframe-player').classList.add('hidden');
            document.getElementById('youtube-iframe-player').src = '';
            if (!reelPlaying) toggleReelPlayback();
        }

        function handleLocalVideoUpload(event) {
            const file = event.target.files[0];
            if (!file) return;

            const videoUrl = URL.createObjectURL(file);
            const player = document.getElementById('local-video-player');
            
            document.getElementById('canvas-reel-wrapper').classList.add('hidden');
            document.getElementById('youtube-iframe-player').classList.add('hidden');
            document.getElementById('youtube-iframe-player').src = '';
            
            player.src = videoUrl;
            player.classList.remove('hidden');
            player.play();
            showToast('Playing your custom video memory!');
        }

        function toggleYoutubeInput() {
            document.getElementById('youtube-url-bar').classList.toggle('hidden');
        }

        function loadYoutubeVideo() {
            const rawUrl = document.getElementById('youtube-url-input').value.trim();
            const match = rawUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/);
            if (!match) {
                showToast('Please enter a valid YouTube video URL.');
                return;
            }
            const embedUrl = `https://www.youtube.com/embed/${match[1]}?autoplay=1`;
            const iframe = document.getElementById('youtube-iframe-player');

            document.getElementById('canvas-reel-wrapper').classList.add('hidden');
            document.getElementById('local-video-player').classList.add('hidden');
            document.getElementById('local-video-player').pause();

            iframe.src = embedUrl;
            iframe.classList.remove('hidden');
            document.getElementById('youtube-url-bar').classList.add('hidden');
            showToast('YouTube memory loaded!');
        }

        /* ---------------------------------------------------------------------
           7. WEB AUDIO API ROMANTIC GENTLE CHIME / PIANO MELODY
        ---------------------------------------------------------------------- */
        let audioCtx = null;
        let isMusicPlaying = false;
        let melodyInterval = null;

        function toggleAmbientMusic() {
            const btnLabel = document.getElementById('music-label');
            const btnIcon = document.getElementById('music-icon');

            if (isMusicPlaying) {
                isMusicPlaying = false;
                clearInterval(melodyInterval);
                btnLabel.textContent = 'Play Melody';
                btnIcon.classList.remove('animate-spin');
                return;
            }

            if (!audioCtx) {
                audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            }
            if (audioCtx.state === 'suspended') {
                audioCtx.resume();
            }

            isMusicPlaying = true;
            btnLabel.textContent = 'Pause Melody';
            btnIcon.classList.add('animate-pulse');

            // Gentle Romantic Arpeggio Notes (Fmaj7 -> Cmaj7 -> Dm7 -> Bbmaj7)
            const notes = [
                349.23, 440.00, 523.25, 659.25, // Fmaj7
                261.63, 329.63, 392.00, 493.88, // Cmaj7
                293.66, 349.23, 440.00, 523.25, // Dm7
                233.08, 293.66, 349.23, 440.00  // Bbmaj7
            ];
            let step = 0;

            function playNote(freq) {
                if (!isMusicPlaying || !audioCtx) return;
                const now = audioCtx.currentTime;
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();

                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, now);

                gain.gain.setValueAtTime(0.0001, now);
                gain.gain.exponentialRampToValueAtTime(0.06, now + 0.08);
                gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

                osc.connect(gain);
                gain.connect(audioCtx.destination);

                osc.start(now);
                osc.stop(now + 1.85);
            }

            playNote(notes[0]);
            step = 1;
            melodyInterval = setInterval(() => {
                playNote(notes[step % notes.length]);
                step++;
            }, 680);
        }

        /* ---------------------------------------------------------------------
           8. CUSTOMIZATION MODAL HANDLERS
        ---------------------------------------------------------------------- */
        function toggleCustomizeModal() {
            const modal = document.getElementById('customize-modal');
            const isHidden = modal.classList.contains('hidden');
            if (isHidden) {
                document.getElementById('input-couple-names').value = cardData.coupleNames;
                document.getElementById('input-start-date').value = cardData.startDate;
                document.getElementById('input-hero-subtitle').value = cardData.heroSubtitle;
                document.getElementById('input-poem-title').value = cardData.poemTitle;
                document.getElementById('input-poem-body').value = cardData.poemBody;
                document.getElementById('input-postcard-to').value = cardData.postcardTo;
                document.getElementById('input-postcard-signature').value = cardData.postcardSignature;
                document.getElementById('input-postcard-message').value = cardData.postcardMessage;
                modal.classList.remove('hidden');
            } else {
                modal.classList.add('hidden');
            }
        }

        function saveCustomizations(event) {
            event.preventDefault();
            cardData.coupleNames = document.getElementById('input-couple-names').value.trim() || DEFAULT_DATA.coupleNames;
            cardData.startDate = document.getElementById('input-start-date').value || DEFAULT_DATA.startDate;
            cardData.heroSubtitle = document.getElementById('input-hero-subtitle').value.trim();
            cardData.poemTitle = document.getElementById('input-poem-title').value.trim();
            cardData.poemBody = document.getElementById('input-poem-body').value;
            cardData.postcardTo = document.getElementById('input-postcard-to').value.trim();
            cardData.postcardSignature = document.getElementById('input-postcard-signature').value.trim();
            cardData.postcardMessage = document.getElementById('input-postcard-message').value.trim();

            persistCardData();
            renderAllSections();
            updateRelationshipCounter();
            toggleCustomizeModal();
            showToast('Your personalized love card has been saved!');
        }

        function resetToDefaults() {
            cardData = JSON.parse(JSON.stringify(DEFAULT_DATA));
            persistCardData();
            renderAllSections();
            updateRelationshipCounter();
            toggleCustomizeModal();
            showToast('Restored default love card template.');
        }

        /* ---------------------------------------------------------------------
           9. FLOATING AMBIENT HEARTS, HEART BURST & SCROLL REVEAL
        ---------------------------------------------------------------------- */
        function createAmbientHearts() {
            const container = document.getElementById('ambient-hearts-layer');
            const symbols = ['♥', '♡', '❦'];
            for (let i = 0; i < 14; i++) {
                const el = document.createElement('span');
                el.className = 'ambient-heart select-none';
                el.textContent = symbols[i % symbols.length];
                el.style.left = `${Math.random() * 96}%`;
                el.style.fontSize = `${12 + Math.random() * 16}px`;
                el.style.animationDuration = `${14 + Math.random() * 16}s`;
                el.style.animationDelay = `${-Math.random() * 20}s`;
                container.appendChild(el);
            }
        }

        function triggerHeartBurst(event) {
            cardData.kissCount = (cardData.kissCount || 0) + 1;
            document.getElementById('kiss-count').textContent = cardData.kissCount;
            persistCardData();

            const rect = event.currentTarget.getBoundingClientRect();
            const originX = rect.left + rect.width / 2;
            const originY = rect.top + rect.height / 2;
            const icons = ['♥', '💋', '💖', '✨', '🌹'];

            for (let i = 0; i < 24; i++) {
                const particle = document.createElement('span');
                particle.className = 'burst-heart text-xl sm:text-2xl select-none';
                particle.textContent = icons[i % icons.length];
                particle.style.left = `${originX}px`;
                particle.style.top = `${originY}px`;

                const angle = (Math.PI * 2 * i) / 24 + (Math.random() - 0.5) * 0.4;
                const distance = 90 + Math.random() * 180;
                particle.style.setProperty('--tx', `${Math.cos(angle) * distance}px`);
                particle.style.setProperty('--ty', `${Math.sin(angle) * distance - 60}px`);
                particle.style.setProperty('--rot', `${(Math.random() - 0.5) * 90}deg`);

                document.body.appendChild(particle);
                setTimeout(() => particle.remove(), 1450);
            }
        }

        function initScrollReveal() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.reveal-section').forEach(sec => observer.observe(sec));
        }

        /* ---------------------------------------------------------------------
           10. INITIALIZE APP ON WINDOW LOAD
        ---------------------------------------------------------------------- */
        window.onload = function() {
            renderAllSections();
            updateRelationshipCounter();
            setInterval(updateRelationshipCounter, 1000);
            createAmbientHearts();
            initScrollReveal();
            initLoveReelCanvas();
        };
    </script>
</body>
</html>