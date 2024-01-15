source 'https://rubygems.org'

ruby '3.1.3'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
# gem 'rails', '4.0.1'
# gem 'rails', '4.2.4'
# gem 'rails', '4.2.8'
gem 'rails', github: 'rails/rails'

# Enabling STDOUT so logging can be sent to Heroku
gem 'rails_12factor', group: :production

# Gem to configure using postgres
# gem 'pg'

# Adding functionality for twitter bootstrap and less
gem "therubyracer"
gem "less-rails" #Sprockets (what Rails 3.1 uses for its asset pipeline) supports LESS
gem "twitter-bootstrap-rails"

# Adding Devise for authentication
gem 'devise'

# Adding annotate so I can see what's in the db for each Model in the model file
# gem 'annotate', ">=2.6.0"

#Adding bcrypt-ruby for encrypting passwords
gem 'bcrypt-ruby'
# Adding compass for sass styling
gem 'compass-rails'
# Use SCSS for stylesheets
gem 'sass-rails'

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier'

# Use CoffeeScript for .js.coffee assets and views
gem 'coffee-rails'

# See https://github.com/sstephenson/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'

# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 1.2'

# gem 'pg'
# gem "pg", '~> 0.18' 
gem 'pg'

group :doc do
  # bundle exec rake doc:rails generates the API under doc/api.
  gem 'sdoc', require: false
end

# Use ActiveModel has_secure_password
# gem 'bcrypt-ruby', '~> 3.1.2'

# Use unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano', group: :development

# Use debugger
# gem 'debugger', group: [:development, :test]
group :test do
	gem 'rspec-rails', "~> 2.12"
end

group :staging, :development do
  gem 'pry'
  gem 'pry-remote'
  gem 'pry-stack_explorer'
end
