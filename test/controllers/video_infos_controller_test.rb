require 'test_helper'

class VideoInfosControllerTest < ActionController::TestCase
  setup do
    @video_info = video_infos(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:video_infos)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create video_info" do
    assert_difference('VideoInfo.count') do
      post :create, video_info: { number_of_milliseconds: @video_info.number_of_milliseconds, video_name: @video_info.video_name }
    end

    assert_redirected_to video_info_path(assigns(:video_info))
  end

  test "should show video_info" do
    get :show, id: @video_info
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @video_info
    assert_response :success
  end

  test "should update video_info" do
    patch :update, id: @video_info, video_info: { number_of_milliseconds: @video_info.number_of_milliseconds, video_name: @video_info.video_name }
    assert_redirected_to video_info_path(assigns(:video_info))
  end

  test "should destroy video_info" do
    assert_difference('VideoInfo.count', -1) do
      delete :destroy, id: @video_info
    end

    assert_redirected_to video_infos_path
  end
end
