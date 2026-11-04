// Eidalux Testimonials
const testimonialsData = [
    { name: "Dr. Thomas Mathew", company: "Luxury Home Owner, Kochi", text: "We furnished our entire home with Eidalux mattresses. The spine support and craftsmanship are exceptional. Linet Joseph's personal attention to detail and sleep quality made all the difference." },
    { name: "Ananya Nair", company: "Principal Architect, Studio Habitat", text: "As an interior architect, I recommend Eidalux to all our luxury residential clients. Their custom sizing, premium materials, and finish are consistently top-tier." },
    { name: "Mathew Varghese", company: "Managing Partner, Misty Valley Resorts", text: "Our resort guests consistently praise the sleeping comfort. Eidalux delivered hotel-grade luxury mattresses on time and with impeccable finish." }
];

const portfolioData = [
    { src: "images/mattress1.webp", title: "Eidalux Royal Crest", desc: "Ultra Luxury Pillow-Top Hybrid System" },
    { src: "images/mattress2.webp", title: "Eidalux OrthoCare Pro", desc: "Doctor-Engineered Spinal Support" },
    { src: "images/mattress3.webp", title: "Eidalux Natural Latex", desc: "100% Organic Eco-Comfort Series" },
    { src: "images/mattress4.webp", title: "Eidalux Bespoke Masterpiece", desc: "Custom Handcrafted Luxury Sleep" }
];

const statsData = [
    { label: "Years Experience", value: "15+" },
    { label: "Happy Sleepers", value: "25,000+" },
    { label: "Architect & Resort Partners", value: "100+" },
    { label: "Craftsmanship & Quality", value: "100%" }
];

// Configuration
const config = {
    whatsappNumber: "918714046916", // Linet Joseph's WhatsApp number
    phone: "+91 87140 46916",
    email: "linetjoseph@eidalux.com",
    website: "https://www.eidalux.com",
    instagram: "https://www.instagram.com/eidaluxmattress",
    linkedin: "https://linkedin.com/in/linet-joseph",
    facebook: "https://facebook.com/eidaluxmattress",
    youtube: "https://youtube.com",
    twitter: "https://twitter.com",
    location: "Kerala, India",
    websiteUrl: "https://linet-joseph.vercel.app/",
};

// Eidalux Collections & Products Data
const servicesData = [
    { 
        title: "Eidalux Royal Crest - Ultra Luxury Series", 
        desc: "Handcrafted pocket spring mattress with organic natural latex topper for five-star hotel comfort and plush body contouring.", 
        image: "images/mattress1.webp" 
    },
    { 
        title: "Eidalux OrthoCare - Spine Alignment System", 
        desc: "High-density bonded & memory foam engineered with orthopedic specialists for active spine support and zero-motion transfer.", 
        image: "images/mattress2.webp" 
    },
    { 
        title: "Eidalux Pure Latex - Organic Sleep Series", 
        desc: "100% natural pin-core breathable latex mattress offering hypoallergenic, eco-friendly cooling comfort.", 
        image: "images/mattress3.webp" 
    },
    { 
        title: "Bespoke Custom Dimensions & Sizing", 
        desc: "Custom-dimension handcrafted mattresses tailored for imported designer bed frames, round beds, and luxury master bedrooms.", 
        image: "images/mattress4.webp" 
    },
    { 
        title: "Hospitality & Luxury Resort Suite Collection", 
        desc: "Heavy-duty, fire-retardant, luxury mattresses designed for high-end boutique resorts, homestays, and star hotels.", 
        image: "images/banner_eidalux.jpg" 
    },
    { 
        title: "Ergonomic Pillows & Sleep Accessories", 
        desc: "Contour memory foam pillows, dual-comfort latex pillows, and waterproof mattress protectors for complete sleep hygiene.", 
        image: "images/mattress1.webp" 
    }
];

// Circular Links Data
const linksData = [
    { label: "Phone", icon: "phone", color: "bg-red", action: () => { speakAction("Calling Linet Joseph"); window.open(`tel:${config.phone.replace(/\s/g,'')}`); } },
    { label: "WhatsApp", icon: "message-circle", color: "bg-green", action: () => { speakAction("Opening WhatsApp"); openWhatsApp("Hi Linet Joseph, I got your contact from your digital profile and would like to connect."); } },
    { label: "Email", icon: "mail", color: "bg-red", action: () => { speakAction("Sending Email"); window.open(`mailto:${config.email}?subject=Enquiry for Eidalux Mattresses`); } },
    { label: "Website", icon: "globe", color: "bg-blue", action: () => { speakAction("Opening Eidalux Website"); window.open(config.website, '_blank'); } },
    { label: "Location", icon: "map-pin", color: "bg-red", action: () => { speakAction("Opening Location"); alert(`Location: ${config.location}`); } },
    { label: "Copy Link", icon: "copy", color: "bg-red", action: () => { speakAction("Link Copied"); shareProfile(); } },
    { label: "Facebook", icon: "facebook", color: "bg-blue", action: () => { speakAction("Opening Facebook"); window.open(config.facebook, '_blank'); } },
    { label: "Instagram", icon: "instagram", color: "bg-red", action: () => { speakAction("Opening Instagram"); window.open(config.instagram, '_blank'); } }
];

const connectorsData = [
    { title: "Interior Designers & Decorators", icon: "palette" },
    { title: "Architects & Civil Engineers", icon: "building-2" },
    { title: "Luxury Furniture Showrooms", icon: "home" },
    { title: "Hoteliers & Resort Owners", icon: "hotel" },
    { title: "Orthopedic Doctors & Spine Specialists", icon: "activity" }
];

const listenChipsData = [
    "“We are building/furnishing our home and need premium mattresses.”",
    "“Looking for 5-star hotel luxury comfort for our bedrooms.”",
    "“Suffering from back pain and need doctor-grade orthopedic support.”",
    "“Need custom size mattresses for imported designer bed frames.”",
    "“Looking for 100% natural organic latex or breathable cooling mattresses.”",
    "“Need bulk mattress orders for a resort or boutique hotel.”"
];

const idealCustomerData = [
    "Luxury Villa & Independent Home Owners",
    "Architects & Interior Designers",
    "Boutique Hotels, Resorts & Luxury Homestays",
    "Individuals Seeking Orthopedic & Spine Care Support",
    "Real Estate Developers & Turnkey Contractors",
    "Premium Furniture & Home Decor Showrooms"
];

const perfectReferralData = `A luxury homeowner, architect, interior designer, or boutique resort owner looking for <span class="highlight">custom-crafted, premium orthopedic and luxury sleep systems</span> that guarantee world-class comfort, superior spine support, and restorative sleep.`;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    const yearEl = document.getElementById('currentYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
    
    const phoneEl = document.getElementById('footerPhone');
    if (phoneEl) {
        phoneEl.textContent = config.phone;
        if (phoneEl.tagName === 'A') {
            phoneEl.href = `tel:${config.phone.replace(/\s/g,'')}`;
        }
    }
    
    initBannerSlider();
    initAIVoice();
    renderServices();
    renderLinks();
    renderConnectors();
    renderListenChips();
    renderIdealCustomer();
    renderPerfectReferral();
    renderModalsData();
    
    // Create icons with a slight delay to ensure DOM is fully ready
    setTimeout(() => {
        if (window.lucide) lucide.createIcons();
    }, 100);
    
    initLenis();
    setupActions();
    initModalScrollProtection();
    
    if (typeof window !== 'undefined' && window.gsap && window.ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
        initAnimations();
    }
});

// Render Functions
function renderServices() {
    const list = document.getElementById('modalServicesList');
    if (!list) return;
    list.innerHTML = servicesData.map(s => `
        <div class="service-card-hz">
            <div class="service-card-img">
                <img src="${s.image}" alt="${s.title}">
            </div>
            <div class="service-card-content">
                <h4>${s.title}</h4>
                <p>${s.desc}</p>
                <button class="btn btn-black mt-2" onclick="openWhatsApp('I would like to enquire about ${encodeURIComponent(s.title)}')">
                    Enquire Now
                </button>
            </div>
        </div>
    `).join('');
}

function renderLinks() {
    const grid = document.getElementById('linksGrid');
    if (!grid) return;
    grid.innerHTML = '';
    linksData.forEach((link) => {
        const div = document.createElement('div');
        div.className = 'link-item';
        div.innerHTML = `
            <div class="link-icon-circle ${link.color}">
                <i data-lucide="${link.icon}"></i>
            </div>
            <span class="link-label">${link.label}</span>
        `;
        div.addEventListener('click', link.action);
        grid.appendChild(div);
    });
}

function renderConnectors() {
    const list = document.getElementById('connectorsGrid');
    if (!list) return;
    list.innerHTML = connectorsData.map(c => `
        <div class="connector-item">
            <i data-lucide="${c.icon}"></i>
            <span>${c.title}</span>
        </div>
    `).join('');
}

function renderModalsData() {
    // Testimonials
    const tList = document.getElementById('modalTestimonialsList');
    if(tList) {
        tList.innerHTML = testimonialsData.map(t => `
            <div style="background: var(--clr-bg); padding: 1.5rem; border-radius: var(--radius-md); margin-bottom: 1rem; border: 1px solid var(--clr-border);">
                <p style="font-style: italic; color: var(--clr-text-main); margin-bottom: 1rem; line-height: 1.6;">"${t.text}"</p>
                <h4 style="color: var(--clr-primary); margin-bottom: 0.25rem; font-family: var(--font-heading);">${t.name}</h4>
                <span style="font-size: 0.85rem; color: var(--clr-text-muted); font-weight: 500;">${t.company}</span>
            </div>
        `).join('');
    }
    
    // Portfolio
    const pGrid = document.getElementById('modalPortfolioGrid');
    if(pGrid) {
        pGrid.innerHTML = portfolioData.map((item, idx) => {
            const src = typeof item === 'string' ? item : item.src;
            const title = item.title || `Mattress Collection 0${idx + 1}`;
            const desc = item.desc || "Eidalux Premium Sleep System";
            return `
                <div class="portfolio-item-card">
                    <div class="portfolio-img-box">
                        <img src="${src}" alt="${title}" loading="lazy">
                        <span class="portfolio-badge">Eidalux</span>
                    </div>
                    <div class="portfolio-item-info">
                        <h4>${title}</h4>
                        <p>${desc}</p>
                    </div>
                </div>
            `;
        }).join('');
    }
    
    // Stats
    const sGrid = document.getElementById('modalStatsGrid');
    if(sGrid) {
        sGrid.innerHTML = statsData.map(s => `
            <div style="text-align: center; padding: 2rem 1rem; background: var(--clr-bg); border-radius: var(--radius-md); border: 1px solid var(--clr-border);">
                <h2 style="color: var(--clr-primary); font-size: 2.5rem; margin-bottom: 0.5rem; font-family: var(--font-heading);">${s.value}</h2>
                <p style="font-size: 0.85rem; font-weight: 700; color: var(--clr-navy); text-transform: uppercase; letter-spacing: 0.5px;">${s.label}</p>
            </div>
        `).join('');
    }
}

function renderListenChips() {
    const container = document.getElementById('listenChips');
    if (!container) return;
    container.innerHTML = listenChipsData.map(phrase => `
        <div class="listen-chip" onclick="navigator.clipboard.writeText('${phrase}'); alert('Copied: ${phrase}')">
            ${phrase}
        </div>
    `).join('');
}

function renderIdealCustomer() {
    const container = document.getElementById('idealCustomerGrid');
    if (!container) return;
    container.innerHTML = idealCustomerData.map(item => `
        <div class="ideal-customer-item">
            <i data-lucide="target"></i> ${item}
        </div>
    `).join('');
}

function renderPerfectReferral() {
    const box = document.getElementById('perfectReferralBox');
    if (box) {
        box.innerHTML = perfectReferralData;
    }
}

// Banner Slider Logic
function initBannerSlider() {
    const slides = document.querySelectorAll('.banner-slider .slide');
    if (slides.length <= 1) return;
    
    let currentSlide = 0;
    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 4000); // 4 seconds per slide
}

// AI Voice Introduction Logic
function initAIVoice() {
    const playBtn = document.getElementById('btn-play-intro');
    if (!playBtn) return;
    
    if ('speechSynthesis' in window) {
        let isPlaying = false;
        
        playBtn.addEventListener('click', () => {
            if (isPlaying) {
                window.speechSynthesis.cancel();
                isPlaying = false;
                playBtn.innerHTML = '<i data-lucide="volume-2"></i> Play AI Intro';
                if (window.lucide) lucide.createIcons();
                return;
            }
            
            const introText = "Hello and welcome. I am Linet Joseph, Founder and Business Visionary behind Eidalux Mattress. From my roots in media to mattress manufacturing with ASACO and the evolution of Eidalux, my journey is driven by quality, craftsmanship, and a commitment to customer comfort. For us, a mattress is an investment in your health and well-being. Better sleep, better comfort, better living. Welcome to my digital profile.";
            const utterance = new SpeechSynthesisUtterance(introText);
            
            const voices = window.speechSynthesis.getVoices();
            // Prefer articulate English female voices
            const preferredVoice = voices.find(voice => 
                (voice.name.includes('Female') || voice.name.includes('Zira') || voice.name.includes('Samantha') || voice.name.includes('Google UK English Female')) && voice.lang.includes('en')
            ) || voices.find(voice => voice.lang.includes('en')) || voices[0];
            
            if (preferredVoice) {
                utterance.voice = preferredVoice;
            }
            
            utterance.rate = 0.88;
            utterance.pitch = 1.05;
            
            utterance.onstart = () => {
                isPlaying = true;
                playBtn.innerHTML = '<i data-lucide="square"></i> Stop Intro';
                if (window.lucide) lucide.createIcons();
            };
            
            utterance.onend = () => {
                isPlaying = false;
                playBtn.innerHTML = '<i data-lucide="volume-2"></i> Play AI Intro';
                if (window.lucide) lucide.createIcons();
            };
            
            utterance.onerror = () => {
                isPlaying = false;
                playBtn.innerHTML = '<i data-lucide="volume-2"></i> Play AI Intro';
                if (window.lucide) lucide.createIcons();
            };
            
            window.speechSynthesis.speak(utterance);
        });
        
        window.speechSynthesis.onvoiceschanged = () => {
            window.speechSynthesis.getVoices();
        };
    } else {
        playBtn.style.display = 'none';
    }
}

// Speak Action Utility (For buttons)
function speakAction(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1.0;
        utterance.pitch = 1.1;
        
        const voices = window.speechSynthesis.getVoices();
        const preferredVoice = voices.find(voice => 
            (voice.name.includes('Female') || voice.name.includes('Zira') || voice.name.includes('Google UK English Female')) && voice.lang.includes('en')
        ) || voices.find(voice => voice.lang.includes('en')) || voices[0];
        
        if (preferredVoice) utterance.voice = preferredVoice;
        window.speechSynthesis.speak(utterance);
    }
}

// Utility Actions
function openWhatsApp(message) {
    if(!config.whatsappNumber) return alert("WhatsApp not configured.");
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${config.whatsappNumber}?text=${encoded}`, '_blank');
}

function shareProfile() {
    const shareTitle = 'Linet Joseph | Founder & Business Visionary Behind Eidalux';
    const textMsg = `Linet Joseph — Kerala Entrepreneur & Founder of Eidalux Mattress. “Better sleep. Better comfort. Better living.”`;
    if (navigator.share) {
        navigator.share({ title: shareTitle, text: textMsg, url: config.websiteUrl })
            .catch(() => fallbackShare(textMsg + "\n" + config.websiteUrl));
    } else {
        fallbackShare(textMsg + "\n" + config.websiteUrl);
    }
}

function fallbackShare(text) {
    navigator.clipboard.writeText(text).then(() => alert('Profile link copied to clipboard!'));
}

function downloadVCard() {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Linet Joseph
ORG:Eidalux Mattress
TITLE:Founder & Business Visionary | Mattress Industry Leader
TEL;TYPE=WORK,VOICE:${config.phone}
EMAIL;TYPE=WORK:${config.email}
URL:${config.website}
ADR;TYPE=WORK:;;Kerala;India
NOTE:Eidalux Mattress - Better sleep. Better comfort. Better living.
END:VCARD`;
    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Linet_Joseph.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Setup Event Listeners
function setupActions() {
    document.getElementById('btn-whatsapp-connect')?.addEventListener('click', () => {
        speakAction("Connecting on WhatsApp");
        openWhatsApp("Hi Linet Joseph, I would like to connect regarding Eidalux Mattresses.");
    });
    
    document.getElementById('btn-email-me')?.addEventListener('click', () => {
        speakAction("Emailing Linet Joseph");
        window.location.href = `mailto:${config.email}?subject=Inquiry from Digital Profile`;
    });

    document.getElementById('btn-save-contact')?.addEventListener('click', () => {
        speakAction("Saving Contact");
        downloadVCard();
    });

    document.getElementById('btn-share-profile')?.addEventListener('click', () => {
        speakAction("Share profile");
        shareProfile();
    });
    
    // Unified Modal Open & Close System
    window.openModal = function(modalEl, voiceText) {
        if (!modalEl) return;
        if (voiceText) speakAction(voiceText);
        modalEl.classList.add('active');
        document.documentElement.classList.add('modal-open');
        document.body.classList.add('modal-open');
        if (window.lenis) {
            window.lenis.stop();
        }
        if (window.lucide) lucide.createIcons();
    };

    window.closeModal = function(modalEl) {
        if (!modalEl) return;
        modalEl.classList.remove('active');
        const remainingActive = document.querySelectorAll('.modal-overlay.active');
        if (remainingActive.length === 0) {
            document.documentElement.classList.remove('modal-open');
            document.body.classList.remove('modal-open');
            if (window.lenis) {
                window.lenis.start();
            }
        }
    };

    // QR Code Modal Logic
    const qrModal = document.getElementById('qrModal');
    const openQr = () => {
        const qrImg = document.getElementById('qrCodeImg');
        if (qrImg && !qrImg.getAttribute('src')) {
            qrImg.src = "images/qr_linet_joseph.png";
        }
        openModal(qrModal, "Opening QR Code");
    };
    
    document.getElementById('btn-show-qr')?.addEventListener('click', openQr);
    document.getElementById('closeQrBtn')?.addEventListener('click', () => closeModal(qrModal));
    
    document.getElementById('btn-share-qr')?.addEventListener('click', async () => {
        speakAction("Sharing QR Code");
        const qrSrc = document.getElementById('qrCodeImg')?.src || 'images/qr_linet_joseph.png';
        try {
            const response = await fetch(qrSrc);
            const blob = await response.blob();
            const file = new File([blob], 'linet_joseph_qr.png', { type: blob.type });
            
            if (navigator.canShare && navigator.canShare({ files: [file] })) {
                await navigator.share({
                    title: 'Linet Joseph | Eidalux QR Code',
                    text: 'Scan to open Linet Joseph\'s digital profile: https://linet-joseph.vercel.app/',
                    files: [file]
                });
            } else if (navigator.share) {
                await navigator.share({
                    title: 'Linet Joseph | Eidalux QR Code',
                    text: 'Linet Joseph | Founder & Business Visionary Behind Eidalux',
                    url: config.websiteUrl
                });
            } else {
                navigator.clipboard.writeText(config.websiteUrl).then(() => {
                    alert('Profile link copied: ' + config.websiteUrl);
                });
            }
        } catch (err) {
            window.open(config.websiteUrl, '_blank');
        }
    });
    
    // Modals
    const setupModal = (btnId, modalId, closeBtnId, voiceText) => {
        const modal = document.getElementById(modalId);
        const btn = document.getElementById(btnId);
        const closeBtn = document.getElementById(closeBtnId);
        if (btn && modal) {
            btn.addEventListener('click', () => {
                openModal(modal, voiceText);
            });
        }
        if (closeBtn && modal) {
            closeBtn.addEventListener('click', () => {
                closeModal(modal);
            });
        }
    };
    
    setupModal('btn-open-bio-journey', 'bioJourneyModal', 'closeBioJourneyBtn', "Viewing Biography and Entrepreneurial Journey");
    setupModal('btn-testimonials', 'testimonialsModal', 'closeTestimonialsBtn', "Viewing Client Reviews");
    setupModal('btn-portfolio', 'portfolioModal', 'closePortfolioBtn', "Viewing Mattress Showcase");
    setupModal('btn-stats', 'statsModal', 'closeStatsBtn', "Viewing Business Stats");
    
    // Sticky Bottom Bar Actions
    document.getElementById('sticky-call')?.addEventListener('click', () => {
        speakAction("Calling Linet Joseph");
        window.open(`tel:${config.phone.replace(/\s/g,'')}`);
    });
    document.getElementById('sticky-whatsapp')?.addEventListener('click', () => {
        speakAction("Opening WhatsApp");
        openWhatsApp("Hi Linet Joseph, I got your contact from your digital profile.");
    });
    document.getElementById('sticky-save')?.addEventListener('click', () => {
        speakAction("Saving Contact");
        downloadVCard();
    });
    
    document.getElementById('btnCopyIntro')?.addEventListener('click', () => {
        const text = document.getElementById('introText')?.innerText;
        if (text) {
            navigator.clipboard.writeText(text).then(() => alert('Intro copied!'));
        }
    });
    
    document.getElementById('btnWaIntro')?.addEventListener('click', () => {
        const text = document.getElementById('introText')?.innerText;
        if (text) openWhatsApp(text);
    });

    // Services Modal
    const servicesModal = document.getElementById('servicesModal');
    const btnViewServices = document.getElementById('btn-view-services');
    const btnCloseServices = document.getElementById('closeModalBtn');

    if (btnViewServices && servicesModal) {
        btnViewServices.addEventListener('click', () => {
            openModal(servicesModal, "Viewing Eidalux Collections");
        });
    }

    if (btnCloseServices && servicesModal) {
        btnCloseServices.addEventListener('click', () => {
            closeModal(servicesModal);
        });
    }

    // Close any modal on clicking outside overlay
    window.addEventListener('click', (e) => {
        if (e.target.classList && e.target.classList.contains('modal-overlay')) {
            closeModal(e.target);
        }
    });
}

// Animations & Scrolling
let lenisInstance = null;

function initLenis() {
    if (typeof Lenis !== 'undefined') {
        lenisInstance = new Lenis({ duration: 1.2, smooth: true });
        window.lenis = lenisInstance;
        function raf(time) { 
            lenisInstance.raf(time); 
            requestAnimationFrame(raf); 
        }
        requestAnimationFrame(raf);
    }
}

// Modal Two-Finger / Wheel Scroll & Touch Scroll Protection
function initModalScrollProtection() {
    const overlays = document.querySelectorAll('.modal-overlay');
    overlays.forEach(overlay => {
        // Intercept wheel (two-finger scroll on trackpad or mouse wheel)
        overlay.addEventListener('wheel', (e) => {
            if (!overlay.classList.contains('active')) return;

            // Find the active scrollable container in this modal
            const scrollable = overlay.querySelector(
                '.bio-journey-body, .portfolio-modal-body, .modal-body'
            );

            if (scrollable) {
                // Scroll the modal body directly
                scrollable.scrollTop += e.deltaY;
            }

            // Prevent background page from scrolling
            e.preventDefault();
            e.stopPropagation();
        }, { passive: false });

        // Touch event handling for trackpads & touch screens
        let startY = 0;
        overlay.addEventListener('touchstart', (e) => {
            if (e.touches && e.touches[0]) {
                startY = e.touches[0].clientY;
            }
        }, { passive: true });

        overlay.addEventListener('touchmove', (e) => {
            if (!overlay.classList.contains('active')) return;
            if (e.touches && e.touches[0]) {
                const currentY = e.touches[0].clientY;
                const deltaY = startY - currentY;
                startY = currentY;
                const scrollable = overlay.querySelector(
                    '.bio-journey-body, .portfolio-modal-body, .modal-body'
                );
                if (scrollable) {
                    scrollable.scrollTop += deltaY;
                }
                e.preventDefault();
                e.stopPropagation();
            }
        }, { passive: false });
    });
}

function initAnimations() {
    if (typeof gsap === 'undefined') return;
    gsap.from('.profile-avatar', { opacity: 0, scale: 0.85, duration: 0.7, ease: "power2.out" });
    
    document.querySelectorAll('.gs-reveal').forEach(el => {
        gsap.from(el, {
            scrollTrigger: { trigger: el, start: "top 90%" },
            y: 30, opacity: 0, duration: 0.6, ease: 'power2.out'
        });
    });
}