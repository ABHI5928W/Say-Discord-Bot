const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class SayCommand extends BaseCommand {
  constructor() {
    super('say', 'general', []);
  }

  run(client, message, args) {
   

    message.channel.send(args.join(' '))




  }
}