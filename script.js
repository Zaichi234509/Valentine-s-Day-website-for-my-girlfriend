// ============= REASONS WHY I LOVE YOU GENERATOR =============
const loveReasons = [
    // Flirty Reasons
    "The way your smile makes my heart skip a beat every single time.",
    "Your laughter is my favorite sound in the entire world.",
    "I love how your eyes light up when you talk about things you're passionate about.",
    "The way you look at me makes me feel like I'm the only person in the world.",
    "Your voice is the most beautiful melody I've ever heard.",
    "I love how you make even the most ordinary moments feel magical.",
    "The way you carry yourself with such grace and beauty.",
    "Your intelligence mixed with your kindness is incredibly attractive.",
    "I love how you challenge me to be a better person.",
    "Your sense of humor always knows how to make me smile.",
    
    // Romantic Reasons
    "I love how you understand me without me having to say a word.",
    "You have the most beautiful heart I've ever known.",
    "I love dreaming about our future together with you.",
    "The way you love so deeply and completely inspires me.",
    "I love how you make me believe in forever.",
    "You're my safe place, my home, my everything.",
    "I love how you see the beauty in everything, even on hard days.",
    "You make love feel easy and natural.",
    "I love how you've changed my life in the best possible ways.",
    "You're the answer to prayers I didn't even know I was praying.",
    
    // Comforting Reasons (for her worries)
    "I love how strong you are, even when you don't feel strong.",
    "Your determination to provide for your family shows your beautiful heart.",
    "I love how you care so deeply about the people you love.",
    "Your resilience in facing challenges is incredibly inspiring.",
    "I love how you always think ahead and plan for the future.",
    "Your dedication to your goals shows your amazing character.",
    "I love how responsible and thoughtful you are about everything.",
    "You have the strength of a warrior with the heart of an angel.",
    "I love how you turn worries into action plans.",
    "Your ability to carry so much and still shine is remarkable.",
    
    // Encouraging Reasons
    "I love how you never give up, no matter how hard things get.",
    "Your positive attitude even during difficult times is admirable.",
    "I love how you turn challenges into opportunities.",
    "Your faith in the future gives me faith too.",
    "I love how you're always growing and learning.",
    "Your courage to face uncertainties head-on is beautiful.",
    "I love how you inspire everyone around you to be better.",
    "Your hope for tomorrow lights up even the darkest days.",
    "I love how you make plans and work hard to achieve them.",
    "Your perseverance is one of the things I admire most about you.",
    
    // Personal Reasons
    "I love how you make me feel complete.",
    "You're my best friend and my greatest love.",
    "I love how we can talk about anything and everything.",
    "Your presence alone makes everything better.",
    "I love how you accept me for who I am.",
    "You make me want to be the best version of myself.",
    "I love how we understand each other on a deeper level.",
    "Your love has transformed my life in beautiful ways.",
    "I love how we're building something special together.",
    "You're the most beautiful person I know, inside and out.",
    
    // Future-Oriented Reasons
    "I love dreaming about building a life with you.",
    "Your vision for our future excites me every day.",
    "I love how we support each other's dreams and goals.",
    "Planning our future together is my favorite thing to do.",
    "I love how committed you are to making our dreams come true.",
    "Your dedication to creating a better future is inspiring.",
    "I love how we work together as a team.",
    "Thinking about growing old with you makes me so happy.",
    "I love how you include me in your plans for the future.",
    "Building a home with you is my greatest dream.",
    
    // Sweet & Simple Reasons
    "I love the way you say my name.",
    "Your morning messages make my whole day better.",
    "I love how you remember the little things about me.",
    "Your hugs (even virtual ones) feel like home.",
    "I love how excited you get about small things.",
    "Your kindness to others shows your beautiful soul.",
    "I love how you make me feel loved every single day.",
    "Your thoughtfulness never ceases to amaze me.",
    "I love how you're always there for me.",
    "Just being with you (even virtually) makes me happy.",
    
    // For Her Worries About Health
    "I love how you take care of yourself because you want a future with me.",
    "Your concern for your health shows how much you value our future.",
    "I love how strong you are in facing health challenges.",
    "Your positive attitude towards wellness is inspiring.",
    "I love how you're proactive about your well-being.",
    "Your determination to stay healthy for our future touches my heart.",
    "I love how you don't let worries define you.",
    "Your resilience gives me strength too.",
    "I love how you turn concerns into positive action.",
    "Your courage in facing health matters is admirable.",
    
    // For Her Family Responsibilities
    "I love how much you care for your family - it shows your loving heart.",
    "Your dedication to providing for your family is beautiful.",
    "I love how you put others before yourself.",
    "Your sense of responsibility is one of your most attractive qualities.",
    "I love how you work so hard for the people you love.",
    "Your family is lucky to have someone as caring as you.",
    "I love how you balance so many responsibilities with grace.",
    "Your commitment to your family shows your incredible character.",
    "I love how you make sacrifices out of love.",
    "Your strength in carrying family responsibilities inspires me."
];

// ============= COMFORT & ENCOURAGEMENT MESSAGES =============
const comfortMessages = [
    // For overthinking about future/health
    "It's okay to worry about the future, but remember that I'll be right here with you through it all.",
    "Your health concerns show you care about having a long future together - and that means everything to me.",
    "Every worry you have shows how much you care, and that's one of the things I love most about you.",
    "The future can be scary, but we'll face it together, one day at a time.",
    "Your health is important, and I love how seriously you take it. We'll navigate this together.",
    "It's normal to think about what's ahead, but remember we're building our future together.",
    "You're stronger than any challenge that comes your way. I believe in you completely.",
    "Your concerns show your intelligence and foresight - qualities I deeply admire.",
    "We'll take care of each other's health and happiness, now and always.",
    "The future is brighter because you're in it. Everything else, we can handle together.",
    
    // For family responsibilities
    "The way you care for your family shows what an amazing person you are.",
    "Your dedication to providing for your family is beautiful and inspiring.",
    "It's okay to feel the weight of responsibility - it means you have a big, loving heart.",
    "You're carrying so much, but you don't have to carry it alone. I'm here for you.",
    "Your family is lucky to have someone who cares as deeply as you do.",
    "The love you show your family tells me everything I need to know about your character.",
    "You're balancing so much with such grace. I'm in awe of your strength.",
    "Your sense of responsibility is one of the things that makes you so special.",
    "It's okay to ask for help. We're partners, and partners support each other.",
    "You're doing an amazing job, and I'm so proud of the person you are.",
    
    // General comfort
    "You're not alone in this. My love surrounds you, even from afar.",
    "Take a deep breath. You're stronger than you feel right now.",
    "It's okay to have hard days. They don't define you or our love.",
    "Your feelings are valid, and I'm here to listen whenever you need.",
    "Remember how far you've come, not just how far you have to go.",
    "You're allowed to rest. You don't always have to be strong.",
    "I believe in you, even when you find it hard to believe in yourself.",
    "Your worth isn't measured by your productivity or how much you provide.",
    "You're enough, just as you are, right in this moment.",
    "My love for you isn't conditional on anything. I love all of you."
];

const romanceMessages = [
    // Flirty messages
    "Even on your busiest days, you're still the most beautiful person in my world.",
    "Thinking about you is my favorite way to pass the time.",
    "Your smile could light up the darkest room - and it definitely lights up my heart.",
    "I fall for you a little more every single day.",
    "You're the first thing I think of when I wake up and the last before I sleep.",
    "Being with you feels like coming home, no matter where we are.",
    "Your voice is my favorite sound, and your name is my favorite word.",
    "I don't need the stars when I have your eyes to get lost in.",
    "Every moment with you feels like a beautiful dream I never want to wake up from.",
    "You make my heart do things I didn't know were possible.",
    
    // Sweet messages
    "Loving you is the easiest and best thing I've ever done.",
    "You're my favorite hello and my hardest goodbye.",
    "My world is better because you're in it.",
    "You're the missing piece I didn't know I was looking for.",
    "I love you more than I knew was possible to love anyone.",
    "You're not just my love; you're my home.",
    "Every love song makes sense now that I've met you.",
    "You're my favorite thought, my sweetest dream, my greatest reality.",
    "Loving you feels like breathing - natural, necessary, and life-giving.",
    "You're the best part of my day, every day."
];

const specialComfortMessages = [
    // Mixed messages (flirt + comfort + romance + encouragement)
    "You're carrying so much right now, but remember you don't have to carry it alone. And PS: You look beautiful even when you're worried.",
    "I know you're thinking about the future, and I love that about you. But also - have I told you lately how amazing your smile is?",
    "Your strength in facing challenges is incredibly sexy. And your caring heart? That's what makes you so special to me.",
    "It's okay to feel overwhelmed. And when you do, remember: I'm here, I love you, and you're doing better than you think.",
    "Worried about providing? That shows your beautiful heart. But also - can we take a moment to appreciate how wonderful you are?",
    "You're strong, you're capable, and you're also incredibly attractive when you're determined.",
    "The future might seem uncertain, but my love for you is the most certain thing in my life. And you look amazing today.",
    "Your dedication to your family is one of the reasons I love you. That, and your beautiful eyes that I could stare into forever.",
    "Take a break from worrying and remember this: You're loved, you're valued, and you're incredibly special to me.",
    "Health concerns can be scary, but facing them together makes us stronger. And stronger looks really good on you.",
    "You're allowed to rest. You're allowed to not have all the answers. And you're definitely allowed to be loved this much.",
    "The way you care for others shows your beautiful soul. And that soul happens to belong to the most wonderful person I know.",
    "Future planning is important, but so is this moment right now. And in this moment, I'm completely in love with you.",
    "Your resilience is inspiring. Your smile is breathtaking. Your heart is my home.",
    "It's okay to not be okay sometimes. And when you're not, I'll be here with love, comfort, and probably some flirty compliments."
];

// ============= DAILY SURPRISE MESSAGES =============
const dailySurprises = [
    "Today's surprise: You're on my mind more than ever, and my love for you grows stronger with each passing moment.",
    "Surprise! Did you know you make the world a better place just by being in it?",
    "Today's dose of love: You're capable of amazing things, and I believe in you completely.",
    "Surprise! I was just thinking about our future together, and it made me smile so much.",
    "Today's reminder: You're beautiful inside and out, and you're loved more than words can express.",
    "Surprise! Even on hard days, remember that you're strong, you're loved, and you're never alone.",
    "Today's love note: Your happiness is my priority, and your smile is my favorite sight.",
    "Surprise! You're doing better than you think, and I'm so proud of the person you are.",
    "Today's thought: Distance means nothing when someone means everything, and you mean everything to me.",
    "Surprise! You're not just my love; you're my best friend, my partner, and my everything.",
    "Today's encouragement: Your dreams matter, your feelings matter, and you matter so much to me.",
    "Surprise! I love you more today than yesterday, but not as much as tomorrow.",
    "Today's comfort: It's okay to take things one step at a time. I'll be with you every step of the way.",
    "Surprise! You have the most beautiful heart I've ever known.",
    "Today's promise: No matter what comes our way, we'll face it together with love and strength."
];

// ============= THEME MANAGEMENT =============
function updateThemeBasedOnTime() {
    const now = new Date();
    const hour = now.getHours();
    const cherryBlossoms = document.getElementById('cherry-blossoms');
    const nightSky = document.getElementById('night-sky');
    
    // Clear previous themes
    cherryBlossoms.innerHTML = '';
    nightSky.style.opacity = '0';
    
    // Afternoon theme (12 PM - 6 PM): Cherry blossoms
    if (hour >= 12 && hour < 18) {
        createCherryBlossoms();
    }
    // Evening/Night theme (6 PM - 6 AM): Starry night
    else if (hour >= 18 || hour < 6) {
        nightSky.style.opacity = '1';
        createStarryNight();
    }
}

function createCherryBlossoms() {
    const container = document.getElementById('cherry-blossoms');
    const petalCount = 30;
    
    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.innerHTML = '🌸';
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.fontSize = (Math.random() * 12 + 8) + 'px';
        petal.style.animationDelay = (Math.random() * 5) + 's';
        petal.style.animationDuration = (Math.random() * 10 + 10) + 's';
        container.appendChild(petal);
    }
}

function createStarryNight() {
    const container = document.getElementById('night-sky');
    const starCount = 80;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = (Math.random() * 2 + 1) + 'px';
        star.style.height = star.style.width;
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.animationDelay = (Math.random() * 3) + 's';
        star.style.animationDuration = (Math.random() * 2 + 1) + 's';
        container.appendChild(star);
    }
}

// ============= PARTICLE EFFECTS =============
function createParticleEffect(x, y, color = '#ff6b8b', count = 20) {
    const container = document.getElementById('particles-container');
    
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.width = (Math.random() * 8 + 4) + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = color;
        particle.style.opacity = '0.8';
        
        container.appendChild(particle);
        
        // Animate particle
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 80 + 40;
        const vx = Math.cos(angle) * speed;
        const vy = Math.sin(angle) * speed;
        
        let opacity = 0.8;
        const animation = setInterval(() => {
            x += vx / 60;
            y += vy / 60;
            opacity -= 0.02;
            
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            particle.style.opacity = opacity;
            
            if (opacity <= 0) {
                clearInterval(animation);
                particle.remove();
            }
        }, 16);
    }
}

// ============= CURSOR TRAIL =============
function setupCursorTrail() {
    if (window.innerWidth > 768) {
        const trail = document.getElementById('cursor-trail');
        let mouseX = 0, mouseY = 0;
        let trailX = 0, trailY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        
        function animateTrail() {
            trailX += (mouseX - trailX - 10) * 0.2;
            trailY += (mouseY - trailY - 10) * 0.2;
            
            trail.style.left = trailX + 'px';
            trail.style.top = trailY + 'px';
            trail.style.opacity = '0.7';
            
            requestAnimationFrame(animateTrail);
        }
        
        animateTrail();
    }
}

// ============= LOVE GENERATOR =============
function setupLoveGenerator() {
    const generateBtn = document.getElementById('generate-reason-btn');
    const reasonDisplay = document.getElementById('reason-display');
    const reasonCount = document.getElementById('reason-count');
    const reasonsShown = document.getElementById('reasons-shown');
    let usedReasons = new Set();
    let count = 0;
    
    function getRandomReason() {
        if (usedReasons.size >= loveReasons.length) {
            usedReasons.clear();
        }
        
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * loveReasons.length);
        } while (usedReasons.has(randomIndex));
        
        usedReasons.add(randomIndex);
        return loveReasons[randomIndex];
    }
    
    function handleGenerateClick() {
        const reason = getRandomReason();
        reasonDisplay.innerHTML = `<p>${reason}</p>`;
        
        // Animation
        reasonDisplay.style.animation = 'none';
        setTimeout(() => {
            reasonDisplay.style.animation = 'fadeIn 0.5s ease';
        }, 10);
        
        // Update counters
        count++;
        reasonCount.textContent = count;
        reasonsShown.textContent = count;
        
        // Particle effect
        const rect = generateBtn.getBoundingClientRect();
        createParticleEffect(
            rect.left + rect.width / 2,
            rect.top + rect.height / 2,
            '#ff6b8b',
            12
        );
        
        // Button animation
        generateBtn.style.transform = 'scale(1.1)';
        setTimeout(() => {
            generateBtn.style.transform = 'scale(1)';
        }, 200);
    }
    
    // Event listeners for both click and touch
    generateBtn.addEventListener('click', handleGenerateClick);
    generateBtn.addEventListener('touchstart', function(e) {
        e.preventDefault();
        handleGenerateClick();
    });
    
    // Initialize with first reason
    reasonDisplay.innerHTML = `<p>${getRandomReason()}</p>`;
    count++;
    reasonCount.textContent = count;
    reasonsShown.textContent = count;
}

// ============= COMFORT & ENCOURAGEMENT =============
function setupComfortButtons() {
    const comfortBtn = document.getElementById('comfort-btn');
    const romanceBtn = document.getElementById('romance-btn');
    const specialBtn = document.getElementById('special-comfort-btn');
    const comfortMessage = document.getElementById('comfort-message');
    const romanceMessage = document.getElementById('romance-message');
    const comfortsSent = document.getElementById('comforts-sent');
    
    let comfortCount = 0;
    let romanceCount = 0;
    let specialCount = 0;
    
    function updateComfortCount() {
        comfortsSent.textContent = comfortCount + romanceCount + specialCount;
    }
    
    function handleComfortClick() {
        const randomIndex = Math.floor(Math.random() * comfortMessages.length);
        comfortMessage.textContent = comfortMessages[randomIndex];
        comfortCount++;
        updateComfortCount();
        
        // Animation
        comfortMessage.parentElement.style.animation = 'none';
        setTimeout(() => {
            comfortMessage.parentElement.style.animation = 'fadeIn 0.5s ease';
        }, 10);
        
        // Particle effect
        createParticleEffect(
            comfortBtn.getBoundingClientRect().left + comfortBtn.getBoundingClientRect().width / 2,
            comfortBtn.getBoundingClientRect().top + comfortBtn.getBoundingClientRect().height / 2,
            '#4A90E2',
            8
        );
        
        // Button animation
        comfortBtn.style.transform = 'scale(1.05)';
        setTimeout(() => {
            comfortBtn.style.transform = 'scale(1)';
        }, 200);
    }
    
    function handleRomanceClick() {
        const randomIndex = Math.floor(Math.random() * romanceMessages.length);
        romanceMessage.textContent = romanceMessages[randomIndex];
        romanceCount++;
        updateComfortCount();
        
        // Animation
        romanceMessage.parentElement.style.animation = 'none';
        setTimeout(() => {
            romanceMessage.parentElement.style.animation = 'fadeIn 0.5s ease';
        }, 10);
        
        // Particle effect
        createParticleEffect(
            romanceBtn.getBoundingClientRect().left + romanceBtn.getBoundingClientRect().width / 2,
            romanceBtn.getBoundingClientRect().top + romanceBtn.getBoundingClientRect().height / 2,
            '#ff6b8b',
            8
        );
        
        // Button animation
        romanceBtn.style.transform = 'scale(1.05)';
        setTimeout(() => {
            romanceBtn.style.transform = 'scale(1)';
        }, 200);
    }
    
    function handleSpecialClick() {
        const randomIndex = Math.floor(Math.random() * specialComfortMessages.length);
        
        // Show in both displays
        comfortMessage.textContent = specialComfortMessages[randomIndex];
        romanceMessage.textContent = specialComfortMessages[randomIndex];
        
        specialCount++;
        updateComfortCount();
        
        // Animation for both
        comfortMessage.parentElement.style.animation = 'none';
        romanceMessage.parentElement.style.animation = 'none';
        setTimeout(() => {
            comfortMessage.parentElement.style.animation = 'fadeIn 0.5s ease';
            romanceMessage.parentElement.style.animation = 'fadeIn 0.5s ease';
        }, 10);
        
        // Big particle effect
        createParticleEffect(
            specialBtn.getBoundingClientRect().left + specialBtn.getBoundingClientRect().width / 2,
            specialBtn.getBoundingClientRect().top + specialBtn.getBoundingClientRect().height / 2,
            '#00b4d8',
            20
        );
        
        // Button animation
        specialBtn.style.transform = 'scale(1.1)';
        setTimeout(() => {
            specialBtn.style.transform = 'scale(1)';
        }, 300);
    }
    
    // Event listeners
    comfortBtn.addEventListener('click', handleComfortClick);
    comfortBtn.addEventListener('touchstart', function(e) {
        e.preventDefault();
        handleComfortClick();
    });
    
    romanceBtn.addEventListener('click', handleRomanceClick);
    romanceBtn.addEventListener('touchstart', function(e) {
        e.preventDefault();
        handleRomanceClick();
    });
    
    specialBtn.addEventListener('click', handleSpecialClick);
    specialBtn.addEventListener('touchstart', function(e) {
        e.preventDefault();
        handleSpecialClick();
    });
}

// ============= DAILY SURPRISE =============
function setupDailySurprise() {
    const surpriseBtn = document.getElementById('daily-surprise-btn');
    const surprisesOpened = document.getElementById('surprises-opened');
    let surpriseCount = 0;
    let usedSurprises = new Set();
    
    function handleSurpriseClick() {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * dailySurprises.length);
        } while (usedSurprises.has(randomIndex) && usedSurprises.size < dailySurprises.length);
        
        if (usedSurprises.size >= dailySurprises.length) {
            usedSurprises.clear();
        }
        
        usedSurprises.add(randomIndex);
        
        // Create popup message
        const popup = document.createElement('div');
        popup.style.position = 'fixed';
        popup.style.top = '50%';
        popup.style.left = '50%';
        popup.style.transform = 'translate(-50%, -50%)';
        popup.style.background = 'linear-gradient(45deg, #ff9a00, #ff6b8b)';
        popup.style.color = 'white';
        popup.style.padding = '25px';
        popup.style.borderRadius = '20px';
        popup.style.zIndex = '99999';
        popup.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
        popup.style.textAlign = 'center';
        popup.style.maxWidth = '450px';
        popup.style.width = '85%';
        popup.style.animation = 'fadeIn 0.5s ease forwards';
        
        popup.innerHTML = `
            <h3 class="cursive-font mb-3">Your Daily Surprise! 💝</h3>
            <p style="font-size: 1.1rem; line-height: 1.6;">${dailySurprises[randomIndex]}</p>
            <button class="btn btn-light mt-3 close-popup" style="min-height: 44px; min-width: 100px;">OK</button>
        `;
        
        document.body.appendChild(popup);
        
        // Close button
        popup.querySelector('.close-popup').addEventListener('click', function() {
            popup.style.animation = 'fadeIn 0.5s ease reverse forwards';
            setTimeout(() => {
                popup.remove();
            }, 500);
        });
        
        // Close on click outside
        popup.addEventListener('click', function(e) {
            if (e.target === this) {
                popup.style.animation = 'fadeIn 0.5s ease reverse forwards';
                setTimeout(() => {
                    popup.remove();
                }, 500);
            }
        });
        
        // Update counter
        surpriseCount++;
        surprisesOpened.textContent = surpriseCount;
        
        // Particle effect
        createParticleEffect(
            surpriseBtn.getBoundingClientRect().left + surpriseBtn.getBoundingClientRect().width / 2,
            surpriseBtn.getBoundingClientRect().top + surpriseBtn.getBoundingClientRect().height / 2,
            '#ff9a00',
            20
        );
        
        // Button animation
        surpriseBtn.style.transform = 'scale(1.05)';
        setTimeout(() => {
            surpriseBtn.style.transform = 'scale(1)';
        }, 200);
    }
    
    // Event listeners
    surpriseBtn.addEventListener('click', handleSurpriseClick);
    surpriseBtn.addEventListener('touchstart', function(e) {
        e.preventDefault();
        handleSurpriseClick();
    });
}

// ============= LOVE METER ANIMATION =============
function animateLoveMeter() {
    const meterFill = document.getElementById('love-meter-fill');
    const percentage = document.getElementById('love-percentage');
    let width = 100;
    let direction = -1;
    
    setInterval(() => {
        width += direction * 0.5;
        
        if (width <= 95) direction = 1;
        if (width >= 100) direction = -1;
        
        meterFill.style.width = width + '%';
    }, 100);
}

// ============= VALENTINE'S DAY GREETING =============
function setupValentineGreeting() {
    const envelope = document.getElementById('envelope');
    const valentineLetter = document.getElementById('valentine-letter');
    const closeLetter = document.getElementById('close-letter');
    
    function openEnvelope() {
        envelope.classList.add('open');
        
        // Show letter with delay
        setTimeout(() => {
            valentineLetter.classList.add('show');
            
            // Create heart explosion
            for(let i = 0; i < 15; i++) {
                setTimeout(() => {
                    createParticleEffect(
                        envelope.getBoundingClientRect().left + envelope.getBoundingClientRect().width / 2,
                        envelope.getBoundingClientRect().top + envelope.getBoundingClientRect().height / 2,
                        '#ff6b8b',
                        5
                    );
                }, i * 100);
            }
            
            // Play romantic sound effect
            playRomanticSound();
            
        }, 500);
    }
    
    function closeValentineLetter() {
        valentineLetter.classList.remove('show');
        
        setTimeout(() => {
            envelope.classList.remove('open');
        }, 300);
    }
    
    // Event listeners for envelope
    envelope.addEventListener('click', openEnvelope);
    envelope.addEventListener('touchstart', function(e) {
        e.preventDefault();
        openEnvelope();
    });
    
    // Event listener for close button
    closeLetter.addEventListener('click', closeValentineLetter);
    closeLetter.addEventListener('touchstart', function(e) {
        e.preventDefault();
        closeValentineLetter();
    });
    
    // Valentine's Day countdown
    updateValentineCountdown();
    setInterval(updateValentineCountdown, 1000);
}

function updateValentineCountdown() {
    // Set Valentine's Day date
    const now = new Date();
    const currentYear = now.getFullYear();
    const valentineDate = new Date(currentYear, 1, 14); // February 14
    
    // If Valentine's Day has passed this year, set for next year
    if (now > valentineDate) {
        valentineDate.setFullYear(currentYear + 1);
    }
    
    const timeLeft = valentineDate - now;
    
    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        document.getElementById('valentine-days').textContent = days.toString().padStart(2, '0');
        document.getElementById('valentine-hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('valentine-minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('valentine-seconds').textContent = seconds.toString().padStart(2, '0');
    } else {
        // It's Valentine's Day!
        document.getElementById('valentine-days').textContent = "00";
        document.getElementById('valentine-hours').textContent = "00";
        document.getElementById('valentine-minutes').textContent = "00";
        document.getElementById('valentine-seconds').textContent = "00";
        
        // Update message
        const countdownElement = document.querySelector('.valentine-countdown h4');
        if (countdownElement) {
            countdownElement.textContent = "Happy Valentine's Day! 🎉";
        }
    }
}

function playRomanticSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 523.25;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.05, audioContext.currentTime + 0.1);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 1);
    } catch (e) {
        console.log("Audio context not supported, skipping sound effect");
    }
}

// ============= TIMELINE ANIMATION =============
function checkTimelineVisibility() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (itemTop < windowHeight - 100) {
            item.classList.add('visible');
        }
    });
}

// ============= LOGOUT FUNCTION =============
function setupLogout() {
    const logoutBtn = document.getElementById('logout-btn');
    
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            if (confirm("Return to Valentine's Day page?")) {
                window.location.href = 'index.html';
            }
        });
        
        logoutBtn.addEventListener('touchstart', function(e) {
            e.preventDefault();
            if (confirm("Return to Valentine's Day page?")) {
                window.location.href = 'index.html';
            }
        });
    }
}

// ============= SMOOTH SCROLLING =============
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse.show');
                if (navbarCollapse) {
                    navbarCollapse.classList.remove('show');
                }
            }
        });
    });
}

// ============= CLICK PARTICLE EFFECTS =============
function setupClickParticles() {
    document.addEventListener('click', function(e) {
        // Don't create particles on form elements
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'BUTTON' || e.target.closest('button')) {
            return;
        }
        
        // Random chance to create particles
        if (Math.random() > 0.7) {
            const colors = ['#ff6b8b', '#6a5af9', '#ffd166', '#06d6a0'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            createParticleEffect(e.clientX, e.clientY, randomColor, 3);
        }
    });
}

// ============= MOBILE TOUCH IMPROVEMENTS =============
function improveMobileExperience() {
    // Prevent zoom on double tap
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function(event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
    
    // Improve button touch feedback
    document.querySelectorAll('button, .btn, .envelope, .photo-frame, .timeline-content, .promise-item').forEach(element => {
        element.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
            this.style.transition = 'transform 0.1s ease';
        });
        
        element.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        element.addEventListener('touchcancel', function() {
            this.style.transform = 'scale(1)';
            this.style.transition = 'transform 0.3s ease';
        });
    });
    
    // Fix for iOS viewport height
    function setVH() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    setVH();
    window.addEventListener('resize', setVH);
    window.addEventListener('orientationchange', setVH);
    
    // Prevent pull-to-refresh on mobile
    document.body.style.overscrollBehavior = 'contain';
}

// ============= INITIALIZE EVERYTHING =============
document.addEventListener('DOMContentLoaded', function() {
    // Set up all features
    updateThemeBasedOnTime();
    setupCursorTrail();
    setupLoveGenerator();
    setupComfortButtons();
    setupDailySurprise();
    setupValentineGreeting();
    animateLoveMeter();
    setupLogout();
    setupSmoothScrolling();
    setupClickParticles();
    improveMobileExperience();
    
    // Check timeline visibility
    checkTimelineVisibility();
    window.addEventListener('scroll', checkTimelineVisibility);
    window.addEventListener('resize', checkTimelineVisibility);
    
    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero-section');
        if (hero && window.innerWidth > 768) {
            hero.style.transform = `translateY(${scrolled * 0.05}px)`;
        }
    });
    
    // Update theme every hour
    setInterval(updateThemeBasedOnTime, 3600000);
    
    // Welcome message
    setTimeout(() => {
        console.log("%c❤️ Welcome to your special place, Mary Joy! ❤️", 
            "color: #ff6b8b; font-size: 16px; font-weight: bold;");
        console.log("%cThis website was made with love just for you.", 
            "color: #6a5af9; font-size: 14px;");
    }, 1000);
    
    // Initialize all counters to 0
    document.getElementById('comforts-sent').textContent = '0';
    document.getElementById('reasons-shown').textContent = '0';
    document.getElementById('surprises-opened').textContent = '0';
});
