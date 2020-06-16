require 'test_helper'

class ComplaintTest < ActiveSupport::TestCase
  setup do
    @complaint = complaints(:ok)
  end

  test "should not save complaint without description" do
    complaint = Complaint.new
    complaint.latitude = 1
    complaint.longitude = 1
    complaint.description = nil
    complaint.noise_type = 1
    assert_not complaint.save
  end

  test "should not save complaint without latitude" do
    complaint = Complaint.new
    complaint.latitude = nil
    complaint.longitude = 1
    complaint.description = "test"
    complaint.noise_type = 1
    assert_not complaint.save
  end

  test "should not save complaint without longitude" do
    complaint = Complaint.new
    complaint.latitude = 1
    complaint.longitude = nil
    complaint.description = "test"
    complaint.noise_type = 1
    assert_not complaint.save
  end

  test "should not save complaint without noise type" do
    complaint = Complaint.new
    complaint.latitude = 1
    complaint.longitude = 1
    complaint.description = "test"
    complaint.noise_type = nil
    assert_not complaint.save
  end
end
