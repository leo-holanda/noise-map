require 'test_helper'

class LocationTest < ActiveSupport::TestCase
  test "should not validate without address" do
    location = Location.new(address: '')
    assert_not location.valid?
  end

  test "should not validate with wrong address" do
    location = Location.new(address: 'dssadj2j23')
    assert_not location.valid?
  end

  test "should get latitude and longitude after initialize" do
    location = Location.new(address: 'mad dog road')
    refute_nil location.latitude
    refute_nil location.longitude
  end
end