import cakeOne from '../images/cake-image.svg';
import phoneCall from '../images/phonecall-receive.svg';
import message from '../images/message.svg';
import profileImg from '../images/mukund.svg';
import adImage from '../images/campaign-ad.jpg';
import adFooter from '../images/campaign-footer.svg';
import cakeTwo from '../images/cake-2.svg';
import cakeThree from '../images/cake-3.svg';

const mockData = [
  {
    id: 1, on: true, campaignName: {
      name: 'Blueberry Cake Campaign',
      image: cakeOne,
      date: '14 Jan',
    }, dateRange: 'Jan 1 - Jan 31', clicks: 500, budget: '$1000', location: 'Global', platform: 'Facebook', status: 'Active'
  },
  {
    id: 2, on: false, campaignName: {
      name: 'Blueberry Cake Campaign',
      image: cakeTwo,
      date: '20 Jan',
    }, dateRange: 'Feb 1 - Feb 28', clicks: 700, budget: '$1200', location: 'USA', platform: 'Google', status: 'Exhausted'
  },
  {
    id: 3, on: false, campaignName: {
      name: 'Blueberry Cake Campaign',
      image: cakeThree,
      date: '20 Jan',
    }, dateRange: 'Feb 1 - Feb 28', clicks: 700, budget: '$1200', location: 'USA', platform: 'Youtube', status: 'Exhausted'
  },
];

const firstStepData = [
  {
    title: 'Get Leads as call',
    description: 'Reach broad audience and get leads through calls',
    img: phoneCall
  },
  {
    title: 'Get Leads as Facebook messages',
    description: 'Reach broad audience and get leads through calls',
    img: message
  },
  {
    title: 'Get Leads as Facebook messages',
    description: 'Reach broad audience and get leads through calls',
    img: message
  },
];

const stepTwoData = [
  {
    name: 'Blueberry Cake With Raw Toppings',
    image: cakeOne,
    amount: 2290,
  },
  {
    name: 'Choclate truffle cake',
    image: cakeTwo,
    amount: 3257,
  },
  {
    name: 'Choclate truffle cake',
    image: cakeThree,
    amount: 3257,
  },
]

const stepFourData = [
  {
    name: 'Mukund Cake Shop',
    description: 'We are the best bakery around you. Please like my page to get updates on exciting offers and discounts',
    image: profileImg,
    adImage: adImage,
    adFooter: adFooter
  },
  {
    name: 'Mukund Cake Shop',
    description: 'We are the best bakery around you. Please like my page to get updates on exciting offers and discounts',
    image: profileImg,
    adImage: adImage,
    adFooter: adFooter
  },
  {
    name: 'Mukund Cake Shop',
    description: 'We are the best bakery around you. Please like my page to get updates on exciting offers and discounts',
    image: profileImg,
    adImage: adImage,
    adFooter: adFooter
  },
  {
    name: 'Mukund Cake Shop',
    description: 'We are the best bakery around you. Please like my page to get updates on exciting offers and discounts',
    image: profileImg,
    adImage: adImage,
    adFooter: adFooter
  },
]

export { mockData, firstStepData, stepTwoData, stepFourData, adFooter };