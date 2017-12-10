import Controller from '@ember/controller';

export default Controller.extend({
  options: {
  title: 'How I spend my days',
  height: 300,
  width: 400,
    animation: {
      startup: true,
      easing: 'inAndOut',
    },
  }
});
