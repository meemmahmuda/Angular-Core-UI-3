import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    title: true,
    name: 'হোল্ডিং কর',
    attributes: {
      style: 'color: #609513; font-weight: bold; font-size: 11px; font-family: "Noto Sans Bengali", sans-serif; text-shadow: 1px 1px #609513;'
    }
  },
  {
    name: 'মাস্টার',
    attributes: {
      class: 'custom-title-class',
      style: 'color: #609513; font-weight: 900; font-size: 13px; font-family: "Noto Sans Bengali", sans-serif'
    },
    url: '#',
    icon: 'fa-solid fa-chart-column',   // Font Awesome icon
     // Font Awesome icon
    children: [
      {
        name: 'নতুন অঞ্চল',
        url: '#',
        attributes: {
          style: 'color: #609513; font-weight: 900; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet', 
        
      },
      {
        name: 'নতুন ওয়ার্ড',
        url: '#',
        attributes: {
          style: 'color: #609513; font-weight: 900; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet',  // Font Awesome icon
      },
      {
        name: 'নতুন সেক্টর',
        url: '/base/cards',
        attributes: {
          style: 'color: #609513; font-weight: 900; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet',  // Font Awesome icon
      },
      {
        name: 'নতুন এরিয়া',
        url: '/base/carousel',
        attributes: {
          style: 'color: #609513; font-weight: 900; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet',  // Font Awesome icon
      },
      {
        name: 'নতুন রোড',
        url: '/base/collapse',
        attributes: {
          style: 'color: #609513; font-weight: 900; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet',  // Font Awesome icon
      }
    ]
  },
  {
    name: 'হোম',
    url: '/buttons',
    icon: 'fa-solid fa-house-chimney',  // Font Awesome icon
    attributes: {
      style: 'color: #609513; font-weight: 900; font-size: 13px; font-family: "Noto Sans Bengali", sans-serif'
    },
    children: [
      {
        name: 'ড্যাশবোর্ড',
        url: '/charts',
        attributes: {
          style: 'color: #609513; font-weight: 900; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet',  // Font Awesome icon
      }
    ]
  },
  {
    name: ' আবেদন বিষয়ক',
    url: '/forms',
    attributes: {
      style: 'color: #609513; font-weight: 900; font-size: 13px; font-family: "Noto Sans Bengali", sans-serif;'
    },
    icon: 'fa-solid fa-square-pen',  // Font Awesome icon
    children: [
      {
        name: 'নতুন ই-হোল্ডিং নাম্বারের আবেদন',
        attributes: {
          style: 'color: #609513; font-weight: 900; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        url: '/charts',
        icon: 'nav-icon-bullet',  // Font Awesome icon
      },
      {
        name: 'নতুন আবেদন অনুসন্ধান',
        attributes: {
          style: 'color: #609513; font-weight: 900; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        url: '/forms/select',
        icon: 'nav-icon-bullet',  // Font Awesome icon
      },
      {
        name: 'নতুন আবেদন অনুসন্ধান স্থিতি অনুসন্ধান (Online)',
        url: '/forms/checks-radios',
        attributes: {
          style: 'color: #609513; font-weight: 900; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet',  // Font Awesome icon
      }
    ]
  },
  {
    name: ' ই-হোল্ডিং বিষয়ক',
    icon: 'fa-solid fa-chart-column',  // Font Awesome icon
    attributes: {
      style: 'color: #609513; font-weight: 900; font-size: 13px; font-family: "Noto Sans Bengali", sans-serif;'
    },
    url: '/icons',
    children: [
      {
        name: 'নতুন ই-হোল্ডিং জেনারেশন',
        url: '/icons/coreui-icons',
        attributes: {
          style: 'color: #609513; font-weight: 900; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet',  // Font Awesome icon
      },
      {
        name: 'ই-হোল্ডিং এসেসমেন্ট',
        url: '/icons/flags',
        attributes: {
          style: 'color: #609513; font-weight: 900; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet',  // Font Awesome icon
      },
      {
        name: 'এসেসমেন্ট ইতিহাস',
        url: '/icons/brands',
        attributes: {
          style: 'color: #609513; font-weight: 900; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet',  // Font Awesome icon
      },
      {
        name: 'ই-হোল্ডিং নাম্বার অনুসন্ধান',
        url: '/icons/brands',
        attributes: {
          style: 'color: #609513; font-weight: 900; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet',  // Font Awesome icon 
      }
    ]
  },
  {
    name: 'আদায় সংগ্রহ',
    url: '/notifications',
    attributes: {
      style: 'color: #609513; font-weight: 900; font-size: 13px; font-family: "Noto Sans Bengali", sans-serif;'
    },
    icon: 'fa-solid fa-chart-column',  // Font Awesome icon
    children: [
      {
        name: 'এসেসমেন্ট পেমেন্ট এফেক্ট',
        url: '/notifications/alerts',
        attributes: {
          style: 'color: #609513; font-weight: 900; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet',  // Font Awesome icon
      },
      {
        name: 'আদায় সংগ্রহ',
        url: '/notifications/badges',
        attributes: {
          style: 'color: #609513; font-weight: 900; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      },
      {
        name: 'লেনদেনের বিবরণ',
        url: '/notifications/modal',
        attributes: {
          style: 'color: #609513; font-weight: 900; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      },
      {
        name: 'অন্যান্য লেনদেনের বিবরণ',
        url: '/notifications/toasts',
        attributes: {
          style: 'color: #609513; font-weight: 900; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      },
      {
        name: 'ব্যাংক কনফার্মেশন',
        url: '/notifications/toasts',
        attributes: {
          style: 'color: #609513; font-weight: 900; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      },
      {
        name: 'বকেয়া সেটেলমেন্ট',
        url: '/notifications/toasts',
        attributes: {
          style: 'color: #609513; font-weight: 900; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      },
      {
        name: 'সারচার্জ মওকুফ',
        url: '/notifications/toasts',
        attributes: {
          style: 'color: #609513; font-weight: 900; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      },
      {
        name: 'আংশিক আদায়',
        url: '/notifications/toasts',
        attributes: {
          style: 'color: #609513; font-weight: 900; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      },
      {
        name: '৭৫% প্রদান',
        url: '/notifications/toasts',
        attributes: {
          style: 'color: #609513; font-weight: 900; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      },
      {
        name: 'অন্যান্য আদায়',
        url: '/notifications/toasts',
        attributes: {
          style: 'color: #609513; font-weight: 900; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      }  
    ]
  },
  {
    name: 'সেটিংস',
    url: '/notifications',
    attributes: {
      style: 'color: #609513; font-weight: 900; font-size: 13px; font-family: "Noto Sans Bengali", sans-serif;'
    },
    icon: 'fa-solid fa-chart-column',  // Font Awesome icon
    children: [
      {
        name: 'নতুন ব্যবহারকারী',
        url: '/notifications/alerts',
        attributes: {
          style: 'color: #609513; font-weight: 900; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet',  // Font Awesome icon
      },
      {
        name: 'ইউজার এক্সেস কন্ট্রোল',
        url: '/notifications/badges',
        attributes: {
          style: 'color: #609513; font-weight: 900; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      },
      {
        name: 'ইউজার সমূহ',
        url: '/notifications/modal',
        attributes: {
          style: 'color: #609513; font-weight: 900; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      },
      {
        name: 'আদায় টার্গেট',
        url: '/notifications/toasts',
        attributes: {
          style: 'color: #609513; font-weight: 900; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      },
      {
        name: 'আপডেট পাসওয়ার্ড',
        url: '/notifications/toasts',
        attributes: {
          style: 'color: #609513; font-weight: 900; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'রিপোর্ট',
    url: '/notifications/toasts',
    attributes: {
      style: 'color: #609513; font-weight: 900; font-size: 13px; font-family: "Noto Sans Bengali", sans-serif;'
    },
    icon: 'fas fa-chart-bar',
    children: [
      {
        name: 'ই-হোল্ডিং নাম্বারের বিবরণ',
        url: '/notifications/toasts',
        attributes: {
          style: 'color: #609513; font-weight: 900; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      },
      {
        name: 'মোট আদায় বিবরণী',
        url: '/notifications/toasts',
        attributes: {
          style: 'color: #609513; font-weight: 900; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      },
      {
        name: 'আদায়ের লক্ষ্যমাত্রা',
        url: '/notifications/toasts',
        attributes: {
          style: 'color: #609513; font-weight: 900; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      },
      {
        name: 'আদায় বিবরণী',
        url: '/notifications/toasts',
        attributes: {
          style: 'color: #609513; font-weight: 900; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      }
      ,
      {
        name: 'বকেয়া পাওনার পরিমান',
        url: '/notifications/toasts',
        attributes: {
          style: 'color: #609513; font-weight: 900; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      },
      {
        name: 'বকেয়া কাস্টোমাইজ রিপোর্ট',
        url: '/notifications/toasts',
        attributes: {
          style: 'color: #609513; font-weight: 900; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      },
      {
        name: 'বার্ষিক কর পরিসংখ্যানের বিবরণ',
        url: '/notifications/toasts',
        attributes: {
          style: 'color: #609513; font-weight: 900; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      },
      {
        name: 'ত্রৈমাসিক ভিত্তিতে বকেয়া পাওনার পরিমান',
        url: '/notifications/toasts',
        attributes: {
          style: 'color: #609513; font-weight: 900; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      }
    ]
  },
    {
    name: 'নোটিশ',
    url: '/notifications/toasts',
    attributes: {
      style: 'color: #609513; font-weight: 900; font-size: 13px; font-family: "Noto Sans Bengali", sans-serif;'
    },
    icon: 'fas fa-chart-bar',
    children: [
      {
        name: 'নোটিশ সমূহ',
        url: '/notifications/toasts',
        attributes: {
          style: 'color: #609513; font-weight: 900; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      },
      {
        name: 'বকেয়া বিল প্রিন্ট নোটিশ',
        url: '/notifications/toasts',
        attributes: {
          style: 'color: #609513; font-weight: 900; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      },
      {
        name: 'বিল প্রিন্ট সেটিং',
        url: '/notifications/toasts',
        attributes: {
          style: 'color: #609513; font-weight: 900; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      }
    ]
  },
  // {
  //   title: true,
  //   name: 'Links',
  //   class: 'mt-auto'
  // },
  // {
  //   name: 'Docs',
  //   url: 'https://coreui.io/angular/docs/',
  //   iconComponent: { name: 'cil-description' },
  //   attributes: { target: '_blank' }
  // }
]; 