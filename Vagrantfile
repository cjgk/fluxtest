# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/vivid64"

  config.vm.provider "virtualbox" do |v|
    v.memory = 1024
    v.cpus = 1
  end


  config.vm.network "forwarded_port", guest: 8080, host: 8080

  config.vm.provision "shell", privileged: false, inline: <<-SHELL

   sudo apt-get -y install git vim npm

   sudo ln -s /usr/bin/nodejs /usr/bin/node
   
   git clone https://github.com/cjgk/dotfiles.git
   cd dotfiles
   ./setup.sh
   cd 

   ln -sf /vagrant $HOME/todo

   cd $HOME/todo
   npm install
   
   chmod +x ide.sh
   cd
    
  SHELL

end


