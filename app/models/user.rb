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
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  attr_accessor :login
  devise :database_authenticatable, :registerable,
		 :recoverable, :rememberable, :trackable, :validatable, 
		 #Added :login so you can use username/email to login
		:authentication_keys => [:login]         
	#Using username as unique 
	validates :username, presence: true, length: {maximum: 20, minimum: 3}, uniqueness: true, :case_sensitive => false
	validates_format_of :email, :with => /@/
	validates :email, presence: true
	validates :password, presence: true, length: {minimum: 6, maximum: 40}

	# Ensuring usernames are unique by downcasing

	def self.find_first_by_auth_conditions(warden_conditions)
  		conditions = warden_conditions.dup
		if login = conditions.delete(:login)
    		where(conditions).where(["lower(username) = :value OR lower(email) = :value", { :value => login.downcase }]).first
		else
    		where(conditions).first
      	end
    end       
end