# How to run this from your own server for testing without testing it directly on Github Pages

## Install Prerequiesite

```bash
sudo apt-get install ruby-full build-essential zlib1g-dev
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
gem install jekyll bundler
```
[https://jekyllrb.com/docs/installation/ubuntu/](Link)

## Import the current github pages you have

```bash
jekyll new <GithubPage_Name>
git clone <Github Page repo>
cp -r /home/user/<Github Page repo> /home/user/<GithubPage_Name>
cd <GithubPage_Name>
vim .gitignore
```

Gitignore content
```
_site
.jekyll-cache
```

## Running the thing

```bash
jekyll serve --livereload
```