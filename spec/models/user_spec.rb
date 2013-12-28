require 'spec_helper'

describe User do
	before do
		@user = User.new(first_name: "Chris", last_name: "Aga", username: "Riveascore", email: "agaxx010@morris.umn.edu")
	end

	subject{@user}

	describe "blank username" do
		before { @user.username = ""}
  		it {should_not be_valid}
	end

	describe "improper email address" do 
		before { @user.email = "frank blah hahahah"}
		it {should_not be_valid}
	end

	describe "iusername too short" do 
		before { @user.username = "hi"}
		it {should_not be_valid}
	end	
	describe "username over 20 character length max" do 
		before { @user.username = "qwertyuiopqwertyuiopq"}
		it {should_not be_valid}
	end		

	describe "duplicate username" do
		before do 
			duplicated_username = @user.dup
			duplicated_username.save
		end
		it {should_not be_valid}
	end
end
