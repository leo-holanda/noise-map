class ComplaintsController < ApplicationController

  def index
    @complaint = Complaint.new
    @all_complaints = Complaint.all

    respond_to do |format|
      format.html
      format.js
    end
  end

  def search
    @isComplaint = params[:isComplaint]
    address = search_params[:address]
    results = Geocoder.search(address)

    if results.empty?
      respond_to do |format|
        format.js { render 'location_error' }
      end
    else
      @coordinates = results.first.coordinates
      respond_to do |format|
        format.js
      end
    end
  end

  def create
    @complaint = Complaint.new(complaint_params)
    if @complaint.save
      @marker = @complaint
    else
      @error = @complaint.errors.full_messages
      respond_to do |format|
        format.js { render 'complaint_error'}
      end
    end
  end

  private

  def complaint_params
    params.require(:complaint).permit(:latitude, :longitude, :description, :noise_type)
  end

  def search_params
    params.permit(:address)
  end
  
end
