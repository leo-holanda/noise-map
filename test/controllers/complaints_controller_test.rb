require 'test_helper'

class ComplaintsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @complaint = complaints(:ok)
    
    @search_params = {"address"=>"mad dog road"}
    @params_location_error = {"address"=>""}
    @post_params = {"complaint"=>{"latitude"=>"0.49587293e2", "longitude"=>"-0.93748259e2", "noise_type"=>"2", "description"=>"test"}}
    @post_params_error = {"complaint"=>{"latitude"=>"", "longitude"=>"", "noise_type"=>"2", "description"=>"test"}}

  end

  test "should get index" do
    get root_path
    assert_template "complaints/index"
    assert_template layout: "layouts/application"
  end

  test "should get index with js" do
    get root_path, xhr: true
    assert_template "complaints/index"
  end

  test "should get search" do
    get search_path(@search_params), xhr: true
    assert_template "complaints/search"
  end

  test "should not get search" do
    get search_path(@params_location_error), xhr: true
    assert_template "complaints/location_error"
  end

  test "should post complaint" do
    post complaints_path(@post_params), xhr: true
    assert_template "complaints/create"
  end

  test "should not post complaint" do
    post complaints_path(@post_params_error), xhr: true
    assert_template "complaints/complaint_error"
  end
end
