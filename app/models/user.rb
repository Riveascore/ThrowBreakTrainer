# == Schema Information
#
# Table name: users
#
#  id         :integer          not null, primary key
#  first_name :string(255)
#  last_name  :string(255)
#  username   :string(255)
#  password   :string(255)
#  created_at :datetime
#  updated_at :datetime
#  email      :string(255)
#

class User < ActiveRecord::Base
	#Using username as unique 
	validates :username, presence: true, length: {maximum: 20, minimum: 3}, uniqueness: true
	validates_format_of :email, :with => /@/
	validates :password, presence: true, length: {minimum: 6, maximum: 40}

	has_secure_password
	# Ensuring usernames are unique by downcasing
	before_save {|user| user.username = username.downcase }
end