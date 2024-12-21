import WAlert from '../components/Alert/WAlert.vue';

export default {
  title: 'WAlert',
  component: WAlert,
  argTypes: {
    type: {
      control: { type: 'select', options: ['info', 'success', 'warning', 'error'] },
    },
    dismissible: { control: 'boolean' },
    timeout: { control: 'number' },
    icon: { control: 'boolean' },
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => ({
  components: { WAlert },
  setup() {
    return { args };
  },
  template: '<WAlert v-bind="args">This is an alert message</WAlert>',
});

export const Info = Template.bind({});
Info.args = {
  type: 'info',
  dismissible: false,
  timeout: 0,
  icon: false,
  backgroundColor: '',
};

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  dismissible: true,
  timeout: 3000,
  icon: true,
  backgroundColor: '',
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  dismissible: true,
  timeout: 0,
  icon: false,
  backgroundColor: '',
};

export const Error = Template.bind({});
Error.args = {
  type: 'error',
  dismissible: false,
  timeout: 5000,
  icon: true,
  backgroundColor: '',
};