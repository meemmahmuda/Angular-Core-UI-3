import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    title: true,
    name: 'হোল্ডিং কর',
    attributes: {
      style: 'color: #fff; font-weight: bold; font-size: 11px; font-family: "Noto Sans Bengali", sans-serif; text-shadow: 1px 1px #000;'
    }
  },
  // {
  //   name: 'Dashboard',
  //   url: '/dashboard',
  //   iconComponent: { name: 'cil-speedometer' },
  //   badge: {
  //     color: 'info',
  //     text: 'NEW'
  //   }
  // },
  // {
  //   title: true,
  //   name: 'Theme'
  // },
  // {
  //   name: 'Colors',
  //   url: '/theme/colors',
  //   iconComponent: { name: 'cil-drop' }
  // },
  // {
  //   title: true,
  //   name: 'All Student'
  // },
  // {
  //   name: 'Student',
  //   url: '/studnet',
  //   iconComponent: { name: 'cil-drop' }
  // },
  // {
  //   name: 'Typography',
  //   url: '/theme/typography',
  //   linkProps: { fragment: 'headings' },
  //   iconComponent: { name: 'cil-pencil' }
  // },
  // {
  //   name: 'Components',
  //   title: true
  // },
  {
    name: 'মাস্টার',
    attributes: {
      style: 'color: #fff; font-weight: 500; font-size: 13px; font-family: "Noto Sans Bengali", sans-serif'
    },
    url: '/base',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'নতুন অঞ্চল',
        url: '/base/accordion',
        attributes: {
          style: 'color: #fff; font-weight: 500; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
      },
        icon: 'nav-icon-bullet'
      },
      {
        name: 'নতুন ওয়ার্ড',
        url: '/base/breadcrumbs',
        attributes: {
          style: 'color: #fff; font-weight: 500; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      },
      {
        name: 'নতুন সেক্টর',
        url: '/base/cards',
        attributes: {
          style: 'color: #fff; font-weight: 500; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      },
      {
        name: 'নতুন এরিয়া',
        url: '/base/carousel',
        attributes: {
          style: 'color: #fff; font-weight: 500; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      },
      {
        name: 'নতুন রোড',
        url: '/base/collapse',
        attributes: {
          style: 'color: #fff; font-weight: 500; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      },
      // {
      //   name: 'List Group',
      //   url: '/base/list-group',
      //   icon: 'nav-icon-bullet'
      // },
      // {
      //   name: 'Navs & Tabs',
      //   url: '/base/navs',
      //   icon: 'nav-icon-bullet'
      // },
      // {
      //   name: 'Pagination',
      //   url: '/base/pagination',
      //   icon: 'nav-icon-bullet'
      // },
      // {
      //   name: 'Placeholder',
      //   url: '/base/placeholder',
      //   icon: 'nav-icon-bullet'
      // },
      // {
      //   name: 'Popovers',
      //   url: '/base/popovers',
      //   icon: 'nav-icon-bullet'
      // },
      // {
      //   name: 'Progress',
      //   url: '/base/progress',
      //   icon: 'nav-icon-bullet'
      // },
      // {
      //   name: 'Spinners',
      //   url: '/base/spinners',
      //   icon: 'nav-icon-bullet'
      // },
      // {
      //   name: 'Tables',
      //   url: '/base/tables',
      //   icon: 'nav-icon-bullet'
      // },
      // {
      //   name: 'Tabs',
      //   url: '/base/tabs',
      //   icon: 'nav-icon-bullet'
      // },
      // {
      //   name: 'Tooltips',
      //   url: '/base/tooltips',
      //   icon: 'nav-icon-bullet'
      // }
    ]
  },
  {
    name: 'হোম',
    url: '/buttons',
    iconComponent: { name: 'cil-cursor' },
    attributes: {
      style: 'color: #fff; font-weight: 500; font-size: 13px; font-family: "Noto Sans Bengali", sans-serif'
    },
    children: [
      {
        name: 'ড্যাশবোর্ড',
        url: '/buttons/buttons',
        attributes: {
          style: 'color: #fff; font-weight: 500; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      },
      // {
      //   name: 'Button groups',
      //   url: '/buttons/button-groups',
      //   icon: 'nav-icon-bullet'
      // },
      // {
      //   name: 'Dropdowns',
      //   url: '/buttons/dropdowns',
      //   icon: 'nav-icon-bullet'
      // }
    ]
  },
  {
    name: ' আবেদন বিষয়ক',
    url: '/forms',
    attributes: {
      style: 'color: #fff; font-weight: 500; font-size: 13px; font-family: "Noto Sans Bengali", sans-serif;'
    },
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'নতুন ই-হোল্ডিং নাম্বারের আবেদন',
        attributes: {
          style: 'color: #fff; font-weight: 500; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        url: '/forms/form-control',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'নতুন আবেদন অনুসন্ধান',
        attributes: {
          style: 'color: #fff; font-weight: 500; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        url: '/forms/select',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'নতুন আবেদন অনুসন্ধান স্থিতি অনুসন্ধান (Online)',
        url: '/forms/checks-radios',
        attributes: {
          style: 'color: #fff; font-weight: 500; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      },
      // {
      //   name: 'Range',
      //   url: '/forms/range',
      //   icon: 'nav-icon-bullet'
      // },
      // {
      //   name: 'Input Group',
      //   url: '/forms/input-group',
      //   icon: 'nav-icon-bullet'
      // },
      // {
      //   name: 'Floating Labels',
      //   url: '/forms/floating-labels',
      //   icon: 'nav-icon-bullet'
      // },
      // {
      //   name: 'Layout',
      //   url: '/forms/layout',
      //   icon: 'nav-icon-bullet'
      // },
      // {
      //   name: 'Validation',
      //   url: '/forms/validation',
      //   icon: 'nav-icon-bullet'
      // }
    ]
  },
  // {
  //   name: 'Charts',
  //   iconComponent: { name: 'cil-chart-pie' },
  //   url: '/charts'
  // },
  {
    name: ' ই-হোল্ডিং বিষয়ক',
    iconComponent: { name: 'cil-star' },
    attributes: {
      style: 'color: #fff; font-weight: 500; font-size: 13px; font-family: "Noto Sans Bengali", sans-serif;'
    },
    url: '/icons',
    children: [
      {
        name: 'নতুন ই-হোল্ডিং জেনারেশন',
        url: '/icons/coreui-icons',
        attributes: {
          style: 'color: #fff; font-weight: 500; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet',
      },
      {
        name: 'ই-হোল্ডিং এসেসমেন্ট',
        url: '/icons/flags',
        attributes: {
          style: 'color: #fff; font-weight: 500; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      },
      {
        name: 'এসেসমেন্ট ইতিহাস',
        url: '/icons/brands',
        attributes: {
          style: 'color: #fff; font-weight: 500; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      },
      {
        name: 'ই-হোল্ডিং নাম্বার অনুসন্ধান',
        url: '/icons/brands',
        attributes: {
          style: 'color: #fff; font-weight: 500; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      },
      {
        name: 'নামজারির আবেদন ফরম',
        url: '/icons/brands',
        attributes: {
          style: 'color: #fff; font-weight: 500; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      },
      {
        name: 'নামজারি অনুসন্ধান',
        url: '/icons/brands',
        attributes: {
          style: 'color: #fff; font-weight: 500; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      },
      {
        name: 'নয়াবাদী রিপোর্ট ফরম',
        url: '/icons/brands',
        attributes: {
          style: 'color: #fff; font-weight: 500; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      },
      {
        name: 'নয়াবাদী অনুসন্ধান',
        url: '/icons/brands',
        attributes: {
          style: 'color: #fff; font-weight: 500; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      },
      {
        name: 'ই-হোল্ডিং নিষ্ক্রিয়করণ',
        url: '/icons/brands',
        attributes: {
          style: 'color: #fff; font-weight: 500; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      },
      {
        name: 'নিষ্ক্রিয়করণ ই-হোল্ডিং অনুসন্ধান',
        url: '/icons/brands',
        attributes: {
          style: 'color: #fff; font-weight: 500; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      },
      {
        name: 'ই-হোল্ডিং বাতিল',
        url: '/icons/brands',
        attributes: {
          style: 'color: #fff; font-weight: 500; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'আদায় সংগ্রহ',
    url: '/notifications',
    attributes: {
      style: 'color: #fff; font-weight: 500; font-size: 13px; font-family: "Noto Sans Bengali", sans-serif;'
    },
    iconComponent: { name: 'cil-bell' },
    children: [
      {
        name: 'এসেসমেন্ট পেমেন্ট এফেক্ট',
        url: '/notifications/alerts',
        attributes: {
          style: 'color: #fff; font-weight: 500; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      },
      {
        name: 'আদায় সংগ্রহ',
        url: '/notifications/badges',
        attributes: {
          style: 'color: #fff; font-weight: 500; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      },
      {
        name: 'লেনদেনের বিবরণ',
        url: '/notifications/modal',
        attributes: {
          style: 'color: #fff; font-weight: 500; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      },
      {
        name: 'অন্যান্য লেনদেনের বিবরণ',
        url: '/notifications/toasts',
        attributes: {
          style: 'color: #fff; font-weight: 500; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      },
      {
        name: 'ব্যাংক কনফার্মেশন',
        url: '/notifications/toasts',
        attributes: {
          style: 'color: #fff; font-weight: 500; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      },
      {
        name: 'বকেয়া সেটেলমেন্ট',
        url: '/notifications/toasts',
        attributes: {
          style: 'color: #fff; font-weight: 500; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      },
      {
        name: 'সারচার্জ মওকুফ',
        url: '/notifications/toasts',
        attributes: {
          style: 'color: #fff; font-weight: 500; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      },
      {
        name: 'আংশিক আদায়',
        url: '/notifications/toasts',
        attributes: {
          style: 'color: #fff; font-weight: 500; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      },
      {
        name: '৭৫% প্রদান',
        url: '/notifications/toasts',
        attributes: {
          style: 'color: #fff; font-weight: 500; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      },
      {
        name: 'অন্যান্য আদায়',
        url: '/notifications/toasts',
        attributes: {
          style: 'color: #fff; font-weight: 500; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      }
    ]
  },
  // {
  //   name: 'Widgets',
  //   url: '/widgets',
  //   iconComponent: { name: 'cil-calculator' },
  //   badge: {
  //     color: 'info',
  //     text: 'NEW'
  //   }
  // },
  // {
  //   title: true,
  //   name: 'Extras'
  // },
  {
    name: 'রিপোর্ট',
    url: '/login',
    attributes: {
      style: 'color: #fff; font-weight: 500; font-size: 13px; font-family: "Noto Sans Bengali", sans-serif;'
    },
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'ই-হোল্ডিং নাম্বারের বিবরণ',
        url: '/login',
        attributes: {
          style: 'color: #fff; font-weight: 500; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      },
      {
        name: 'মোট আদায় বিবরণী',
        url: '/register',
        attributes: {
          style: 'color: #fff; font-weight: 500; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      },
      {
        name: 'আদায়ের লক্ষ্যমাত্রা',
        url: '/404',
        attributes: {
          style: 'color: #fff; font-weight: 500; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      },
      {
        name: 'আদায় বিবরণী',
        url: '/500',
        attributes: {
          style: 'color: #fff; font-weight: 500; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      }
      ,
      {
        name: 'বকেয়া পাওনার পরিমান',
        url: '/500',
        attributes: {
          style: 'color: #fff; font-weight: 500; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      },
      {
        name: 'বকেয়া কাস্টোমাইজ রিপোর্ট',
        url: '/500',
        attributes: {
          style: 'color: #fff; font-weight: 500; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      },
      {
        name: 'বার্ষিক কর পরিসংখ্যানের বিবরণ',
        url: '/500',
        attributes: {
          style: 'color: #fff; font-weight: 500; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      },
      {
        name: 'ত্রৈমাসিক ভিত্তিতে বকেয়া পাওনার পরিমান',
        url: '/500',
        attributes: {
          style: 'color: #fff; font-weight: 500; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      }
    ]
  },
    {
    name: 'নোটিশ',
    url: '/login',
    attributes: {
      style: 'color: #fff; font-weight: 500; font-size: 13px; font-family: "Noto Sans Bengali", sans-serif;'
    },
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'নোটিশ সমূহ',
        url: '/login',
        attributes: {
          style: 'color: #fff; font-weight: 500; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      },
      {
        name: 'বকেয়া বিল প্রিন্ট নোটিশ',
        url: '/register',
        attributes: {
          style: 'color: #fff; font-weight: 500; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
        },
        icon: 'nav-icon-bullet'
      },
      {
        name: 'বিল প্রিন্ট সেটিং',
        url: '/404',
        attributes: {
          style: 'color: #fff; font-weight: 500; font-size: 12px; font-family: "Noto Sans Bengali", sans-serif;'
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
