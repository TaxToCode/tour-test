import DemoElOne from '../components/demoEl/DemoElOne.vue';
import DemoElTwo from '../components/demoEl/DemoElTwo.vue';
import DemoElThree from '../components/demoEl/DemoElThree.vue';
import DemoElFour from '../components/demoEl/DemoElFour.vue';
import DemoElFive from '../components/demoEl/DemoElFive.vue';
import DemoElSix from '../components/demoEl/DemoElSix.vue';

export const DEMO_EL_LIST = [
  {
    component: DemoElOne,
    id: 'tour-1',
    tooltipContent: {
      title: '첫번째',
      description: '첫번째 요소입니다.'
    }
  },
  {
    component: DemoElTwo,
    id: 'tour-2',
    tooltipContent: {
      title: '두번째',
      description: '두번째 요소입니다.'
    }
  },
  {
    component: DemoElThree,
    id: 'tour-3',
    tooltipContent: {
      title: '세번째',
      description: '세번째 요소입니다.'
    }
  },
  {
    component: DemoElFour,
    id: 'tour-4',
    tooltipContent: {
      title: '네번째',
      description: '네번째 요소입니다.'
    }
  },
  {
    component: DemoElFive,
    id: 'tour-5',
    tooltipContent: {
      title: '다섯번째',
      description: '다섯번째 요소입니다.'
    }
  },
  {
    component: DemoElSix,
    id: 'tour-6',
    tooltipContent: {
      title: '여섯번째',
      description: '여섯번째 요소입니다.'
    }
  },
]