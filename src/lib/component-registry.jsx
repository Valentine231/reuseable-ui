import dynamic from "next/dynamic";
import * as LucideIcons from "lucide-react";
import React from "react";

// Fallback icon just in case a Lucide icon doesn't exist in the current package version
const FallbackIcon = (props) => (
  <div {...props} style={{ width: props.size || 24, height: props.size || 24, backgroundColor: 'currentColor', opacity: 0.2, borderRadius: 4 }} />
);

const getIcon = (iconName) => LucideIcons[iconName] || FallbackIcon;

// Safe wrapper ensures dynamic imports NEVER return undefined and always render a React component.
// It tries to find the specific named export, then default, then ANY function/object.
const safeDynamic = (importPromise, ...exportNames) => {
  return dynamic(() => importPromise.then(mod => {
    let Comp = null;
    for (const name of exportNames) {
      if (mod[name]) {
        Comp = mod[name];
        break;
      }
    }
    if (!Comp) Comp = mod.default;
    if (!Comp) {
      // Find anything that looks like a renderable component type
      Comp = Object.values(mod).find(v => typeof v === 'function' || (typeof v === 'object' && v !== null && 'render' in v));
    }
    return Comp || (() => (
      <div className="p-6 text-red-500 bg-red-950/30 rounded-2xl border border-red-500/20 max-w-sm mx-auto my-12 text-center shadow-lg backdrop-blur-sm">
        <h3 className="font-bold mb-2">Component Export Issue</h3>
        <p className="text-sm opacity-80">This component could not be resolved. Please check its export in the source file.</p>
      </div>
    ));
  }).catch((err) => {
    console.error("Dynamic import error: ", err);
    return () => (
      <div className="p-6 text-red-500 bg-red-950/30 rounded-2xl border border-red-500/20 max-w-sm mx-auto my-12 text-center shadow-lg backdrop-blur-sm">
         <h3 className="font-bold mb-2">Failed to Load Module</h3>
         <p className="text-sm opacity-80 truncate">{String(err)}</p>
      </div>
    );
  }), { ssr: false }); // disable SSR for showcasing heavy interactive client components
};

export const componentRegistry = [
  { slug: "3d-boxes-background", title: "3D Boxes", description: "Interactive 3D animated boxes background", icon: getIcon('Box'), component: safeDynamic(import("@/app/components/3d-boxes-background"), "ThreeDBoxesBackground") },
  { slug: "animated-countdown", title: "Animated Countdown", description: "Smooth transition countdown timer", icon: getIcon('Timer'), component: safeDynamic(import("@/app/components/animatedcountdown"), "AnimatedCountdown") },
  { slug: "blurry-loader", title: "Blurry Loader", description: "Loading screen with blur un-blur effect", icon: getIcon('RotateCw'), component: safeDynamic(import("@/app/box/page"), "Loader") },
  { slug: "password-generator", title: "Password Generator", description: "Customizable random password generator", icon: getIcon('Key'), component: safeDynamic(import("@/app/components/passwordgenerator"), "PasswordGenerator") },
  { slug: "image-carousel", title: "Image Carousel", description: "Auto-scrolling dynamic image carousel", icon: getIcon('Image'), component: safeDynamic(import("@/app/components/imagecoruel"), "ImageCarousel") },
  { slug: "expanding-cards", title: "Expanding Cards", description: "Cards that expand on hover/click", icon: getIcon('Layout'), component: safeDynamic(import("@/app/components/expandingcards"), "Expandingcards") },
  { slug: "animated-navigation", title: "Animated Navigation", description: "Nav bar with stylish entry animations", icon: getIcon('ArrowRightCircle'), component: safeDynamic(import("@/app/components/animatedNavigation"), "AnimatedNavigation") },
  { slug: "content-placeholder", title: "Content Placeholder", description: "Skeleton loading state placeholder", icon: getIcon('FileText'), component: safeDynamic(import("@/app/components/contentplaceholder"), "ContentPlaceholder") },
  { slug: "insect-catch-game", title: "Insect Catch Game", description: "Fun interactive mini game", icon: getIcon('Bug'), component: safeDynamic(import("@/app/components/insectgame"), "Insectgame") },
  { slug: "ripple-button", title: "Ripple Button", description: "Button with material design ink ripple", icon: getIcon('MousePointer2'), component: safeDynamic(import("@/app/components/buttonrippleeffect"), "RippleButton") },
  { slug: "range-slider", title: "Range Slider", description: "Custom styled CSS range slider", icon: getIcon('SlidersHorizontal'), component: safeDynamic(import("@/app/components/customslider"), "RangeSlider") },
  { slug: "drag-and-drop", title: "Drag & Drop", description: "List items that can be dragged and reordered", icon: getIcon('GripHorizontal'), component: safeDynamic(import("@/app/components/draganddrop"), "DragList") },
  { slug: "kanban-board", title: "Kanban Board", description: "Trello-like drag-and-drop kanban system", icon: getIcon('LayoutDashboard'), component: safeDynamic(import("@/app/components/kanbansystem"), "KanbanBoard") },
  { slug: "form-wave", title: "Form Wave", description: "Login form with waving label effect", icon: getIcon('Shield'), component: safeDynamic(import("@/app/components/formwave"), "LoginForm", "WaveField") },
  { slug: "drink-water", title: "Drink Water Tracker", description: "Daily water consumption tracker app", icon: getIcon('Droplets'), component: safeDynamic(import("@/app/components/drinkwater"), "WaterApp") },
  { slug: "hover-board", title: "Hover Board", description: "Grid playground with fading color trails", icon: getIcon('MousePointer'), component: safeDynamic(import("@/app/components/Hover"), "HoverCard") },
  { slug: "github-profile", title: "GitHub Profile", description: "Fetch and display GitHub profiles from API", icon: getIcon('Github'), component: safeDynamic(import("@/githubprofile/pages"), "GitHubprofile") },
  { slug: "toast-notification", title: "Toast Notifications", description: "Custom pop-up notification system", icon: getIcon('Bell'), component: safeDynamic(import("@/toastnotification/pages"), "ToastNotification") },
  { slug: "split-landing", title: "Split Landing Page", description: "Dual horizontal split screen layout", icon: getIcon('LayoutTemplate'), component: safeDynamic(import("@/app/components/spiltlandingpage"), "SplitLanding") },
  { slug: "drawing-app", title: "Drawing App", description: "Canvas based drawing and doodling tool", icon: getIcon('PenTool'), component: safeDynamic(import("@/app/components/drawing"), "DrawingApp") },
  { slug: "feedback-ui", title: "Feedback UI", description: "Interactive customer satisfaction survey", icon: getIcon('MessageSquare'), component: safeDynamic(import("@/app/components/feedbackui"), "FeedbackCard") },
  { slug: "faq-collapse", title: "FAQ Accordion", description: "Expandable frequently asked questions", icon: getIcon('HelpCircle'), component: safeDynamic(import("@/app/components/faqcollapse"), "FAQ") },
  { slug: "mobile-nav", title: "Mobile Navigation", description: "Compact menu design for mobile screens", icon: getIcon('Menu'), component: safeDynamic(import("@/app/components/mobilenavigation"), "MobileNav", "Navbar") },
  { slug: "quiz-app", title: "Quiz Application", description: "Dynamic multiple-choice quiz", icon: getIcon('CheckSquare'), component: safeDynamic(import("@/app/components/quizapp"), "Quiz") },
  { slug: "sticky-nav", title: "Sticky Navbar", description: "Navigation bar that sticks on scroll", icon: getIcon('Navigation'), component: safeDynamic(import("@/app/components/stickynav"), "StickyNavbar") },
  { slug: "sound-board", title: "Sound Board", description: "Click buttons to play funny sound bites", icon: getIcon('Music'), component: safeDynamic(import("@/soundboard/pages"), "Soundboard") },
  { slug: "clock-theme", title: "Clock Theme", description: "Analog & digital clock with dark mode", icon: getIcon('Clock'), component: safeDynamic(import("@/clocktheme/pages"), "ClockTime") },
  { slug: "verify-account", title: "Verify Account UI", description: "Input form for code verification", icon: getIcon('Lock'), component: safeDynamic(import("@/verfyingui/pages"), "VerifyAccount") },
  { slug: "netflix-mobile-nav", title: "Netflix Mobile Nav", description: "Multi-level slide-in navigation menu", icon: getIcon('Tv'), component: safeDynamic(import("@/app/components/netflixmobilenav"), "NetflixMobileNav") },
  { slug: "todo-list", title: "Todo List", description: "Classic task manager with local storage", icon: getIcon('CheckSquare'), component: safeDynamic(import("@/app/components/todolist"), "Todo") },
  { slug: "movie-app", title: "Movie Application", description: "Fetch and showcase movies via TMDB API", icon: getIcon('Clapperboard'), component: safeDynamic(import("@/movieapp/pages"), "Movieapp") },
  { slug: "live-user-filter", title: "Live User Filter", description: "Real-time search through random user list", icon: getIcon('Users'), component: safeDynamic(import("@/app/components/liveuserfilter"), "LiveUserFilter") },
  { slug: "note-app", title: "Note Taking App", description: "Rich notes app with markdown support", icon: getIcon('StickyNote'), component: safeDynamic(import("@/app/components/noteapp"), "NoteApp") },
  { slug: "random-image", title: "Random Image Feed", description: "Endless scrolling feed of random images", icon: getIcon('Image'), component: safeDynamic(import("@/app/components/randomimage"), "RandomImage") },
  { slug: "random-picker", title: "Random Choice Picker", description: "Input choices and randomly select one", icon: getIcon('Shuffle'), component: safeDynamic(import("@/app/components/randomchociepicker"), "RandomPicker") },
  { slug: "testimonial-switcher", title: "Testimonial Switcher", description: "Auto-rotating customer testimonials", icon: getIcon('MessageSquare'), component: safeDynamic(import("@/app/components/testimonialswitcher"), "TestimonialSwitcher") },
  { slug: "password-strength", title: "Password Strength UI", description: "Background changes based on strength", icon: getIcon('Shield'), component: safeDynamic(import("@/app/components/passwordstrengthenbackground"), "PasswordStrength") },
  { slug: "progress-steps", title: "Progress Steps", description: "Multi-step visual progress indicator", icon: getIcon('Map'), component: safeDynamic(import("@/app/components/progresssteps"), "ProgressSteps") },
  { slug: "joke-card", title: "Dad Jokes API", description: "Fetch random jokes with a button click", icon: getIcon('MessageSquare'), component: safeDynamic(import("@/app/components/jokecard"), "JokeCard") },
  { slug: "double-click-heart", title: "Double Click Heart", description: "Instagram-style like effect", icon: getIcon('Heart'), component: safeDynamic(import("@/app/components/doubleclickhear"), "DoubleClickHeart") },
  { slug: "key-codes", title: "Event KeyCodes", description: "Show details of the pressed keyboard key", icon: getIcon('Hash'), component: safeDynamic(import("@/app/components/eventkeycodes"), "KeyCode") },
  { slug: "hidden-search", title: "Hidden Search", description: "Expandable search input widget", icon: getIcon('Search'), component: safeDynamic(import("@/app/components/hiddensearch"), "HiddenSearch") },
  { slug: "good-cheap-fast", title: "Good Cheap Fast", description: "Funny toggle switch logic demo", icon: getIcon('Zap'), component: safeDynamic(import("@/app/components/goodcheapfast"), "GoodCheapFast") },
  { slug: "rotating-nav", title: "Rotating Nav Info", description: "Transforming layout rotating into view", icon: getIcon('RotateCw'), component: safeDynamic(import("@/app/components/rotatingnav"), "RotatingNav") }
];

export const getComponentBySlug = (slug) => {
  return componentRegistry.find((c) => c.slug === slug);
};
