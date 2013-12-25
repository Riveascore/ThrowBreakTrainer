require 'test_helper'

class MainGameControllerTest < ActionController::TestCase
  test "should get throw_break_trainer" do
    get :throw_break_trainer
    assert_response :success
  end

end
